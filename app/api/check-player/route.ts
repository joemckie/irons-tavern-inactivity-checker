import { NextRequest, NextResponse } from 'next/server';
import { constants } from '@/config/constants';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';

function sleep(duration: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
}

interface PlayerInfo {
  'Datapoint Cooldown': string | number;
}

export async function POST(request: NextRequest) {
  const { players }: { players: string[] } = await request.json();
  const player = players.shift();
  const playerInfoRequest = await fetch(
    `${constants.temple.baseUrl}/api/player_info.php?player=${player}`,
  );
  const playerInfo: PlayerInfo = await playerInfoRequest.json();

  try {
    // If the player has a datapoint cooldown (i.e. a number),
    // this means they have been checked very recently,
    // hence we skip these players entirely.
    if (playerInfo['Datapoint Cooldown'] === '-') {
      console.log(`Checking ${player}`);

      await fetch(
        `${constants.temple.baseUrl}/php/add_datapoint.php?player=${player}`,
      );
    }

    if (players.length) {
      await sleep(6000);

      fetch(`${constants.publicUrl}/api/check-player`, {
        method: 'POST',
        body: JSON.stringify({
          players,
        }),
      });
    }

    // Purge the cache to display the latest member data
    revalidatePath('/');

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);

    return NextResponse.json({ success: false });
  }
}
