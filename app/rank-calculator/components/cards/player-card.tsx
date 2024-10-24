import { Separator, Text } from '@radix-ui/themes';
import { useWatch } from 'react-hook-form';
import { DataCard } from '../data-card';
import { DatePicker } from '../date-picker';
import { useCalculatorScaling } from '../../hooks/point-calculator/use-calculator-scaling';

export function PlayerCard() {
  const playerName = useWatch({ name: 'playerName' });
  const scaling = useCalculatorScaling();

  return (
    <DataCard.Root>
      <DataCard.Row
        left={
          <Text weight="bold" size="2">
            Player
          </Text>
        }
        right={
          <Text aria-label="Player name" weight="bold" size="2">
            {playerName}
          </Text>
        }
      />
      <Separator size="4" />
      <DataCard.Row
        left={
          <Text color="gray" size="2">
            Join Date
          </Text>
        }
        center={<DatePicker name="joinDate" placeholderText="dd-mm-yyyy" />}
        right={
          <Text aria-label="Point scaling" size="2" color="gray">
            {scaling.toFixed(2)}%
          </Text>
        }
      />
    </DataCard.Root>
  );
}
