'use server';

import { formatNumber } from '@/app/rank-calculator/utils/format-number';
import {
  rankSubmissionKey,
  rankSubmissionMetadataKey,
  userRankSubmissionsKey,
} from '@/config/redis';
import { randomUUID } from 'crypto';
import { sendDiscordMessage } from '@/app/rank-calculator/utils/send-discord-message';
import { clientConstants } from '@/config/constants.client';
import { serverConstants } from '@/config/constants.server';
import { pickBy } from 'lodash';
import { format } from 'date-fns';
import { redis } from '@/redis';
import { authActionClient } from '@/app/safe-action';
import { RankSubmissionMetadata } from '@/app/schemas/rank-calculator';
import { discordBotClient } from '@/discord';
import { ChannelType, Routes } from 'discord-api-types/v10';
import { Rank } from '@/config/enums';
import { returnValidationErrors } from 'next-safe-action';
import { calculateScaling } from '../utils/calculate-scaling';
import { formatPercentage } from '../utils/format-percentage';
import { RankCalculatorSchema } from './submit-rank-calculator-validation';
import { getRankName } from '../utils/get-rank-name';
import { getRankImageUrl } from '../utils/get-rank-image-url';

export const submitRankCalculatorAction = authActionClient
  .metadata({
    actionName: 'submit-rank-calculator',
  })
  .bindArgsSchemas<[currentRank: Zod.ZodOptional<typeof Rank>]>([
    Rank.optional(),
  ])
  .schema(RankCalculatorSchema)
  .action(
    async ({
      parsedInput: { rank, points, ...data },
      ctx: { userId },
      bindArgsParsedInputs: [currentRank],
    }) => {
      if (rank === currentRank) {
        returnValidationErrors(RankCalculatorSchema, {
          _errors: ['You already have this rank!'],
        });
      }

      const { channelId } = serverConstants.discord;
      const submissionId = randomUUID();
      const { id: discordMessageId } = await sendDiscordMessage(
        {
          embeds: [
            {
              title: `${data.playerName} rank application`,
              thumbnail: {
                url: getRankImageUrl(rank, true),
              },
              fields: [
                {
                  name: 'Rank',
                  value: getRankName(rank),
                  inline: true,
                },
                {
                  name: 'Rank structure',
                  value: data.rankStructure,
                  inline: true,
                },
                {
                  name: 'Total points',
                  value: formatNumber(points),
                  inline: true,
                },
                {
                  name: 'Join date',
                  value: format(data.joinDate, 'dd MMM yyyy'),
                  inline: true,
                },
                {
                  name: 'Scaling',
                  value: formatPercentage(calculateScaling(data.joinDate)),
                  inline: true,
                },
                {
                  name: 'User',
                  value: `<@${userId}>`,
                  inline: true,
                },
                {
                  name: 'View link',
                  value: `[Click to view submission](${clientConstants.publicUrl}/rank-calculator/view/${submissionId})`,
                },
              ],
            },
          ],
        },
        channelId,
      );

      await discordBotClient.post(Routes.threads(channelId, discordMessageId), {
        body: {
          name: `${data.playerName} - ${getRankName(rank)}`,
          type: ChannelType.PublicThread,
        },
      });

      await discordBotClient.put(
        Routes.threadMembers(discordMessageId, userId),
      );

      const formattedData = {
        ...data,
        acquiredItems: pickBy(data.acquiredItems, (val) => val),
      } satisfies Omit<RankCalculatorSchema, 'rank' | 'points'>;

      const submissionTransaction = redis.multi();

      submissionTransaction.json.set(
        rankSubmissionKey(submissionId),
        '$',
        formattedData,
        { nx: true },
      );

      submissionTransaction.lpush(
        userRankSubmissionsKey(userId, data.playerName),
        rankSubmissionKey(submissionId),
      );

      submissionTransaction.hset(rankSubmissionMetadataKey(submissionId), {
        discordMessageId,
        status: 'Pending',
        submittedBy: userId,
        submittedAt: new Date(),
        actionedBy: null,
      } satisfies RankSubmissionMetadata);

      const submissionResult = await submissionTransaction.exec();

      if (!submissionResult) {
        await discordBotClient.delete(
          Routes.channelMessage(channelId, discordMessageId),
        );

        return {
          success: false,
        };
      }

      return {
        success: true,
      };
    },
  );
