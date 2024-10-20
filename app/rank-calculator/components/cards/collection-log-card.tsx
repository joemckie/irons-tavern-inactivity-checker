import { Progress, Separator, Text } from '@radix-ui/themes';
import { DataCard } from '../data-card';
import { EditableText } from '../editable-text';

export function CollectionLogCard() {
  return (
    <DataCard.Root>
      <DataCard.Row
        left={
          <Text weight="bold" size="2">
            Collection Log
          </Text>
        }
        right={
          <Text weight="bold" size="2">
            11440
          </Text>
        }
      />
      <Separator size="4" />
      <DataCard.Row
        left={
          <Text color="gray" size="2">
            Slots
          </Text>
        }
        center={
          <EditableText name="collectionLogCount" type="number" required />
        }
        right={
          <Text color="gray" size="2">
            11440
          </Text>
        }
      />
      <DataCard.Row
        left={
          <Text color="gray" size="2">
            Progress
          </Text>
        }
        center={<Text size="2">40%</Text>}
        right={
          <Text color="gray" size="2">
            (30000)
          </Text>
        }
      />
      <Progress size="3" value={40} />
    </DataCard.Root>
  );
}
