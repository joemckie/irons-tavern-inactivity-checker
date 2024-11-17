import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';
import { clientConstants } from '@/config/constants.client';
import { Rank } from '@/config/enums';
import { GroupUpdateRequest } from '@/app/schemas/temple-api';
import { serverConstants } from '@/config/constants.server';

export interface ClanMember {
  rsn: string;
  rank: Rank;
  joinedDate: string;
}

interface ClanExport {
  clanName: string;
  clanMemberMaps: ClanMember[];
}

export async function POST(request: NextRequest) {
  const body: ClanExport = await request.json();
  const { members, leaders } = body.clanMemberMaps.reduce(
    (acc, member) => {
      if (clientConstants.ranks.leaders.includes(member.rank)) {
        return {
          ...acc,
          leaders: acc.leaders.concat(member.rsn),
        };
      }

      return {
        ...acc,
        members: acc.members.concat(member.rsn),
      };
    },
    {
      leaders: [] as string[],
      members: [] as string[],
    },
  );

  const templeUpdateData = {
    'clan-checkbox': 'on',
    clan: '100',
    id: serverConstants.temple.groupId,
    key: serverConstants.temple.groupKey,
    name: serverConstants.temple.groupName,
    leaders: leaders.toString(),
    members: members.toString(),
    ...(serverConstants.temple.privateGroup && {
      'private-group-checkbox': 'on',
    }),
  } satisfies GroupUpdateRequest;

  console.log('Updating member list');

  await Promise.all([
    // Sync our Temple page with the new member list
    fetch(`${clientConstants.temple.baseUrl}/groups/edit.php`, {
      method: 'POST',
      body: new URLSearchParams(templeUpdateData),
    }),
    // Save the member list to the Vercel blob store to use later
    put('members.json', JSON.stringify(body.clanMemberMaps), {
      access: 'public',
    }),
    // Check all players in the new member list
    fetch(`${clientConstants.publicUrl}/api/check-all-players`, {
      method: 'POST',
    }),
  ]);

  return NextResponse.json({ success: true });
}
