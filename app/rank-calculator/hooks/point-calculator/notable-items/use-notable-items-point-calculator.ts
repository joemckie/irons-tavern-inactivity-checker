import { useWatch } from 'react-hook-form';
import { CommonPointCalculatorData, FormData } from '@/types/rank-calculator';
import Decimal from 'decimal.js-light';
import { useGetItems } from '../../use-get-items';
import { useMaxNotableItemsPoints } from './use-max-notable-items-points';
import { useCalculatorScaling } from '../use-calculator-scaling';

export interface NotableItemsPointCalculatorData
  extends CommonPointCalculatorData {
  percentageCollected: number;
  itemsCollected: number;
  totalItems: number;
}

export function useNotableItemsPointCalculator() {
  const { data } = useGetItems();
  const itemFields = useWatch<FormData, 'acquiredItems'>({
    name: 'acquiredItems',
  });
  const scaling = useCalculatorScaling();
  const totalPointsAvailable = useMaxNotableItemsPoints();
  const { totalItems, itemPoints } = data.reduce(
    (acc, [, { items }]) => {
      const { categoryItemPointMap } = items.reduce(
        (categoryAcc, val) => ({
          categoryItemPointMap: {
            ...categoryAcc.categoryItemPointMap,
            [val.name.replaceAll("'", '')]: val.points,
          },
        }),
        {
          categoryItemPointMap: {},
        },
      );

      return {
        totalItems: acc.totalItems + items.length,
        itemPoints: {
          ...acc.itemPoints,
          ...categoryItemPointMap,
        },
      };
    },
    {
      totalItems: 0,
      itemPoints: {} as Record<string, number>,
    },
  );
  const filteredItemFields = itemFields
    ? Object.entries(itemFields).filter(([, value]) => !!value)
    : [];
  const itemsCollected = filteredItemFields.length;
  const percentageCollected = (itemsCollected / totalItems) * 100;
  const unscaledPointsAwarded = filteredItemFields.reduce(
    (acc, [item]) => acc + itemPoints[item],
    0,
  );
  const pointsAwarded = new Decimal(unscaledPointsAwarded)
    .times(scaling)
    .toDecimalPlaces(0, Decimal.ROUND_FLOOR)
    .toNumber();
  const pointsAwardedPercentage = (pointsAwarded / totalPointsAvailable) * 100;

  return {
    pointsAwarded,
    pointsAwardedPercentage,
    pointsRemaining: totalPointsAvailable - pointsAwarded,
    percentageCollected,
    itemsCollected,
    totalItems,
  } satisfies NotableItemsPointCalculatorData;
}
