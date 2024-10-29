import { SkillingPointCalculatorData } from '@/app/rank-calculator/hooks/point-calculator/skilling/use-skilling-point-calculator';
import { CategoryFixture } from '@/cypress/support/types';

export const skillingExpectedValues = {
  earlyGamePlayer: {
    fullScaling: {
      pointsAwarded: 27061,
      pointsAwardedPercentage: 37.71,
      pointsRemaining: 38619,
      achievementDiariesPoints: {
        'Kourend & Kebos': 100,
        'Lumbridge & Draynor': 100,
        'Western Provinces': 100,
        Ardougne: 100,
        Desert: 0,
        Falador: 0,
        Fremennik: 0,
        Kandarin: 0,
        Karamja: 100,
        Morytania: 0,
        Varrock: 100,
        Wilderness: 0,
      },
      ehpPoints: 3680,
      totalLevelPoints: 22781,
    },
    fourMonthScaling: {
      pointsAwarded: 18942,
      pointsAwardedPercentage: 37.71,
      pointsRemaining: 27034,
      achievementDiariesPoints: {
        'Kourend & Kebos': 70,
        'Lumbridge & Draynor': 70,
        'Western Provinces': 70,
        Ardougne: 70,
        Desert: 0,
        Falador: 0,
        Fremennik: 0,
        Kandarin: 0,
        Karamja: 70,
        Morytania: 0,
        Varrock: 70,
        Wilderness: 0,
      },
      ehpPoints: 2576,
      totalLevelPoints: 15946,
    },
    twoMonthScaling: {
      pointsAwarded: 10824,
      pointsAwardedPercentage: 37.71,
      pointsRemaining: 15448,
      achievementDiariesPoints: {
        'Kourend & Kebos': 40,
        'Lumbridge & Draynor': 40,
        'Western Provinces': 40,
        Ardougne: 40,
        Desert: 0,
        Falador: 0,
        Fremennik: 0,
        Kandarin: 0,
        Karamja: 40,
        Morytania: 0,
        Varrock: 40,
        Wilderness: 0,
      },
      ehpPoints: 1472,
      totalLevelPoints: 9112,
    },
    threeWeekScaling: {
      pointsAwarded: 4732,
      pointsAwardedPercentage: 37.68,
      pointsRemaining: 6762,
      achievementDiariesPoints: {
        'Kourend & Kebos': 17,
        'Lumbridge & Draynor': 17,
        'Western Provinces': 17,
        Ardougne: 17,
        Desert: 0,
        Falador: 0,
        Fremennik: 0,
        Kandarin: 0,
        Karamja: 17,
        Morytania: 0,
        Varrock: 17,
        Wilderness: 0,
      },
      ehpPoints: 644,
      totalLevelPoints: 3986,
    },
    noScaling: {
      pointsAwarded: 2706,
      pointsAwardedPercentage: 37.71,
      pointsRemaining: 3862,
      achievementDiariesPoints: {
        'Kourend & Kebos': 10,
        'Lumbridge & Draynor': 10,
        'Western Provinces': 10,
        Ardougne: 10,
        Desert: 0,
        Falador: 0,
        Fremennik: 0,
        Kandarin: 0,
        Karamja: 10,
        Morytania: 0,
        Varrock: 10,
        Wilderness: 0,
      },
      ehpPoints: 368,
      totalLevelPoints: 2278,
    },
  },
  midGamePlayer: {
    fullScaling: {
      pointsAwarded: 65458,
      pointsAwardedPercentage: 87.13,
      pointsRemaining: 7982,
      achievementDiariesPoints: {
        'Kourend & Kebos': 1000,
        'Lumbridge & Draynor': 1000,
        'Western Provinces': 1000,
        Ardougne: 1000,
        Desert: 1000,
        Falador: 1000,
        Fremennik: 1000,
        Kandarin: 1000,
        Karamja: 1000,
        Morytania: 1000,
        Varrock: 1000,
        Wilderness: 1000,
      },
      ehpPoints: 11440,
      totalLevelPoints: 42018,
    },
    fourMonthScaling: {
      pointsAwarded: 45820,
      pointsAwardedPercentage: 87.12,
      pointsRemaining: 5588,
      achievementDiariesPoints: {
        'Kourend & Kebos': 700,
        'Lumbridge & Draynor': 700,
        'Western Provinces': 700,
        Ardougne: 700,
        Desert: 700,
        Falador: 700,
        Fremennik: 700,
        Kandarin: 700,
        Karamja: 700,
        Morytania: 700,
        Varrock: 700,
        Wilderness: 700,
      },
      ehpPoints: 8008,
      totalLevelPoints: 29412,
    },
    twoMonthScaling: {
      pointsAwarded: 26183,
      pointsAwardedPercentage: 87.13,
      pointsRemaining: 3193,
      achievementDiariesPoints: {
        'Kourend & Kebos': 400,
        'Lumbridge & Draynor': 400,
        'Western Provinces': 400,
        Ardougne: 400,
        Desert: 400,
        Falador: 400,
        Fremennik: 400,
        Kandarin: 400,
        Karamja: 400,
        Morytania: 400,
        Varrock: 400,
        Wilderness: 400,
      },
      ehpPoints: 4576,
      totalLevelPoints: 16807,
    },
    threeWeekScaling: {
      pointsAwarded: 11455,
      pointsAwardedPercentage: 87.12,
      pointsRemaining: 1397,
      achievementDiariesPoints: {
        'Kourend & Kebos': 175,
        'Lumbridge & Draynor': 175,
        'Western Provinces': 175,
        Ardougne: 175,
        Desert: 175,
        Falador: 175,
        Fremennik: 175,
        Kandarin: 175,
        Karamja: 175,
        Morytania: 175,
        Varrock: 175,
        Wilderness: 175,
      },
      ehpPoints: 2002,
      totalLevelPoints: 7353,
    },
    noScaling: {
      pointsAwarded: 6545,
      pointsAwardedPercentage: 87.11,
      pointsRemaining: 799,
      achievementDiariesPoints: {
        'Kourend & Kebos': 100,
        'Lumbridge & Draynor': 100,
        'Western Provinces': 100,
        Ardougne: 100,
        Desert: 100,
        Falador: 100,
        Fremennik: 100,
        Kandarin: 100,
        Karamja: 100,
        Morytania: 100,
        Varrock: 100,
        Wilderness: 100,
      },
      ehpPoints: 1144,
      totalLevelPoints: 4201,
    },
  },
  endGamePlayer: {
    fullScaling: {
      pointsAwarded: 85760,
      pointsAwardedPercentage: 93.55,
      pointsRemaining: 4000,
      achievementDiariesPoints: {
        'Kourend & Kebos': 1000,
        'Lumbridge & Draynor': 1000,
        'Western Provinces': 1000,
        Ardougne: 1000,
        Desert: 1000,
        Falador: 1000,
        Fremennik: 1000,
        Kandarin: 1000,
        Karamja: 1000,
        Morytania: 1000,
        Varrock: 1000,
        Wilderness: 1000,
      },
      ehpPoints: 27760,
      totalLevelPoints: 46000,
    },
    fourMonthScaling: {
      pointsAwarded: 60032,
      pointsAwardedPercentage: 93.55,
      pointsRemaining: 2800,
      achievementDiariesPoints: {
        'Kourend & Kebos': 700,
        'Lumbridge & Draynor': 700,
        'Western Provinces': 700,
        Ardougne: 700,
        Desert: 700,
        Falador: 700,
        Fremennik: 700,
        Kandarin: 700,
        Karamja: 700,
        Morytania: 700,
        Varrock: 700,
        Wilderness: 700,
      },
      ehpPoints: 19432,
      totalLevelPoints: 32200,
    },
    twoMonthScaling: {
      pointsAwarded: 34304,
      pointsAwardedPercentage: 93.55,
      pointsRemaining: 1600,
      achievementDiariesPoints: {
        'Kourend & Kebos': 400,
        'Lumbridge & Draynor': 400,
        'Western Provinces': 400,
        Ardougne: 400,
        Desert: 400,
        Falador: 400,
        Fremennik: 400,
        Kandarin: 400,
        Karamja: 400,
        Morytania: 400,
        Varrock: 400,
        Wilderness: 400,
      },
      ehpPoints: 11104,
      totalLevelPoints: 18400,
    },
    threeWeekScaling: {
      pointsAwarded: 15008,
      pointsAwardedPercentage: 93.55,
      pointsRemaining: 700,
      achievementDiariesPoints: {
        'Kourend & Kebos': 175,
        'Lumbridge & Draynor': 175,
        'Western Provinces': 175,
        Ardougne: 175,
        Desert: 175,
        Falador: 175,
        Fremennik: 175,
        Kandarin: 175,
        Karamja: 175,
        Morytania: 175,
        Varrock: 175,
        Wilderness: 175,
      },
      ehpPoints: 4858,
      totalLevelPoints: 8050,
    },
    noScaling: {
      pointsAwarded: 8576,
      pointsAwardedPercentage: 93.55,
      pointsRemaining: 400,
      achievementDiariesPoints: {
        'Kourend & Kebos': 100,
        'Lumbridge & Draynor': 100,
        'Western Provinces': 100,
        Ardougne: 100,
        Desert: 100,
        Falador: 100,
        Fremennik: 100,
        Kandarin: 100,
        Karamja: 100,
        Morytania: 100,
        Varrock: 100,
        Wilderness: 100,
      },
      ehpPoints: 2776,
      totalLevelPoints: 4600,
    },
  },
} satisfies CategoryFixture<SkillingPointCalculatorData>;
