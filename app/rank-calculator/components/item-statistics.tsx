import { Card, DataList } from '@radix-ui/themes';
import { useWatch } from 'react-hook-form';
import { useGetItems } from '../hooks/use-get-items';

export function ItemStatistics() {
  const { data } = useGetItems();
  const itemFields = useWatch<Record<string, boolean>>({
    name: 'items',
  });

  const { totalItems, itemPoints, totalPoints } = data.reduce(
    (acc, [, { items }]) => {
      const { categoryItemPointMap, categoryTotalPoints } = items.reduce(
        (categoryAcc, val) => ({
          categoryItemPointMap: {
            ...categoryAcc.categoryItemPointMap,
            [val.name.replaceAll("'", '')]: val.points,
          },
          categoryTotalPoints: categoryAcc.categoryTotalPoints + val.points,
        }),
        {
          categoryItemPointMap: {},
          categoryTotalPoints: 0,
        },
      );

      return {
        totalPoints: acc.totalPoints + categoryTotalPoints,
        totalItems: acc.totalItems + items.length,
        itemPoints: {
          ...acc.itemPoints,
          ...categoryItemPointMap,
        },
      };
    },
    {
      totalPoints: 0,
      totalItems: 0,
      itemPoints: {} as Record<string, number>,
    },
  );

  const filteredItemFields = Object.entries(itemFields).filter(
    ([, value]) => !!value,
  );
  const itemsCollected = filteredItemFields.length;
  const percentageCollected = (itemsCollected / totalItems) * 100;
  const pointsAwarded = filteredItemFields.reduce(
    (acc, [item]) => acc + itemPoints[item],
    0,
  );
  const percentagePointsAchieved = (pointsAwarded / totalPoints) * 100;

  return (
    <Card>
      <DataList.Root>
        <DataList.Item>
          <DataList.Label>Total item points</DataList.Label>
          <DataList.Value>{pointsAwarded}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Items collected</DataList.Label>
          <DataList.Value>{itemsCollected}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Total items available</DataList.Label>
          <DataList.Value>{totalItems}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Items collected</DataList.Label>
          <DataList.Value>{percentageCollected.toFixed(2)}%</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Points achieved</DataList.Label>
          <DataList.Value>
            {percentagePointsAchieved.toFixed(2)}%
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Card>
  );
}
