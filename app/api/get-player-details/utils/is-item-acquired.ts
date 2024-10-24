import { CollectionLogItemMap } from '@/types/collection-log';
import {
  isCollectionLogItem,
  isCombatAchievementItem,
  isCustomItem,
  isQuestItem,
  Item,
} from '@/types/items';
import { MiniQuest, Quest } from '@/types/osrs';
import { AchievementDiaryMap } from '@/types/rank-calculator';
import { LevelMap, QuestStatus } from '@/types/wiki';

interface IsItemAcquiredData {
  collectionLogItems: CollectionLogItemMap | null;
  quests: Record<Quest | MiniQuest, QuestStatus> | null;
  achievementDiaries: AchievementDiaryMap | null;
  levels: LevelMap | null;
  musicTracks: Record<string, boolean> | null;
}

export function isItemAcquired(
  item: Item,
  {
    collectionLogItems,
    quests,
    achievementDiaries,
    levels,
    musicTracks,
  }: IsItemAcquiredData,
) {
  if (isCollectionLogItem(item)) {
    return (
      collectionLogItems &&
      item.requiredItems.every(
        ({ amount, clogName }) =>
          (collectionLogItems?.[clogName] ?? 0) >= amount,
      )
    );
  }

  if (isCombatAchievementItem(item)) {
    return false;
  }

  if (isQuestItem(item)) {
    return (
      quests &&
      item.requiredQuests.every(
        (quest) => quests[quest] === QuestStatus.Completed,
      )
    );
  }

  if (isCustomItem(item)) {
    return item.isAcquired({
      achievementDiaries,
      collectionLogItems,
      levels,
      musicTracks,
    });
  }

  return false;
}
