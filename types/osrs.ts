import { z } from 'zod';

export const Skill = z.enum([
  'Attack',
  'Strength',
  'Defence',
  'Ranged',
  'Prayer',
  'Magic',
  'Runecraft',
  'Hitpoints',
  'Crafting',
  'Mining',
  'Smithing',
  'Fishing',
  'Cooking',
  'Firemaking',
  'Woodcutting',
  'Agility',
  'Herblore',
  'Thieving',
  'Fletching',
  'Slayer',
  'Farming',
  'Construction',
  'Hunter',
]);

export const Quest = z.enum([
  'A Kingdom Divided',
  'A Night at the Theatre',
  'A Porcine of Interest',
  "A Soul's Bane",
  'A Tail of Two Cats',
  'A Taste of Hope',
  'Animal Magnetism',
  'Another Slice of H.A.M.',
  'At First Light',
  'Below Ice Mountain',
  'Beneath Cursed Sands',
  'Between a Rock...',
  'Bone Voyage',
  'Children of the Sun',
  'Client of Kourend',
  'Cold War',
  'Contact!',
  'Creature of Fenkenstrain',
  'Darkness of Hallowvale',
  'Death on the Isle',
  'Death to the Dorgeshuun',
  'Defender of Varrock',
  'Demon Slayer',
  'Desert Treasure I',
  'Desert Treasure II - The Fallen Empire',
  'Devious Minds',
  'Dragon Slayer II',
  'Dream Mentor',
  "Eagles' Peak",
  'Elemental Workshop I',
  'Elemental Workshop II',
  "Enakhra's Lament",
  'Enlightened Journey',
  'Ethically Acquired Antiquities',
  'Fairytale I - Growing Pains',
  'Fairytale II - Cure a Queen',
  'Forgettable Tale...',
  'Garden of Tranquillity',
  'Getting Ahead',
  'Ghosts Ahoy',
  'Goblin Diplomacy',
  'Grim Tales',
  'Horror from the Deep',
  "Icthlarin's Little Helper",
  'In Aid of the Myreque',
  "King's Ransom",
  'Land of the Goblins',
  'Lunar Diplomacy',
  'Making Friends with My Arm',
  'Making History',
  'Meat and Greet',
  'Misthalin Mystery',
  'Monkey Madness II',
  'Mountain Daughter',
  "Mourning's End Part II",
  "My Arm's Big Adventure",
  "Olaf's Quest",
  'Perilous Moons',
  'Ratcatchers',
  'Recipe for Disaster',
  "Recipe for Disaster - Another Cook's Quest",
  'Recipe for Disaster - Culinaromancer',
  'Recipe for Disaster - Evil Dave',
  'Recipe for Disaster - King Awowogei',
  'Recipe for Disaster - Lumbridge Guide',
  'Recipe for Disaster - Mountain Dwarf',
  'Recipe for Disaster - Pirate Pete',
  'Recipe for Disaster - Sir Amik Varze',
  'Recipe for Disaster - Skrach Uglogwee',
  'Recipe for Disaster - Wartface & Bentnoze',
  'Recruitment Drive',
  'Royal Trouble',
  'Secrets of the North',
  'Shadow of the Storm',
  'Shield of Arrav',
  'Sins of the Father',
  'Sleeping Giants',
  'Song of the Elves',
  'Spirits of the Elid',
  'Swan Song',
  'Tale of the Righteous',
  'Tears of Guthix',
  'Temple of the Eye',
  'The Ascent of Arceuus',
  'The Corsair Curse',
  'The Depths of Despair',
  'The Eyes of Glouphrie',
  'The Feud',
  'The Forsaken Tower',
  'The Fremennik Exiles',
  'The Fremennik Isles',
  'The Garden of Death',
  'The Giant Dwarf',
  'The Golem',
  'The Hand in the Sand',
  'The Heart of Darkness',
  'The Lost Tribe',
  'The Path of Glouphrie',
  'The Queen of Thieves',
  'The Ribbiting Tale of a Lily Pad Labour Dispute',
  'The Slug Menace',
  'Tower of Life',
  "Twilight's Promise",
  'Wanted!',
  'What Lies Below',
  'While Guthix Sleeps',
  'X Marks the Spot',
  'Zogre Flesh Eaters',
  'Big Chompy Bird Hunting',
  'Biohazard',
  "Black Knights' Fortress",
  'Cabin Fever',
  'Clock Tower',
  "Cook's Assistant",
  'Death Plateau',
  "Doric's Quest",
  'Dragon Slayer I',
  'Druidic Ritual',
  'Dwarf Cannon',
  "Eadgar's Ruse",
  'Ernest the Chicken',
  'Family Crest',
  'Fight Arena',
  'Fishing Contest',
  "Gertrude's Cat",
  'Haunted Mine',
  'Hazeel Cult',
  "Heroes' Quest",
  'Holy Grail',
  'Imp Catcher',
  'In Search of the Myreque',
  'Jungle Potion',
  "Legends' Quest",
  'Lost City',
  "Merlin's Crystal",
  "Monk's Friend",
  'Monkey Madness I',
  "Mourning's End Part I",
  'Murder Mystery',
  'Nature Spirit',
  'Observatory Quest',
  'One Small Favour',
  "Pirate's Treasure",
  'Plague City',
  'Priest in Peril',
  'Prince Ali Rescue',
  'Rag and Bone Man I',
  'Rag and Bone Man II',
  'Regicide',
  'Romeo & Juliet',
  'Roving Elves',
  'Rum Deal',
  'Rune Mysteries',
  'Scorpion Catcher',
  'Sea Slug',
  "Shades of Mort'ton",
  'Sheep Herder',
  'Sheep Shearer',
  'Shilo Village',
  'Tai Bwo Wannai Trio',
  'Temple of Ikov',
  'The Dig Site',
  'The Fremennik Trials',
  'The Grand Tree',
  'The Great Brain Robbery',
  "The Knight's Sword",
  'The Restless Ghost',
  'The Tourist Trap',
  'Throne of Miscellania',
  'Tree Gnome Village',
  'Tribal Totem',
  'Troll Romance',
  'Troll Stronghold',
  'Underground Pass',
  'Vampyre Slayer',
  'Watchtower',
  'Waterfall Quest',
  "Witch's House",
  "Witch's Potion",
]);

export type Quest = z.infer<typeof Quest>;

export const MiniQuest = z.enum([
  "Alfred Grimhand's Barcrawl",
  'Barbarian Training',
  'Bear Your Soul',
  'Curse of the Empty Lord',
  "Daddy's Home",
  'The Enchanted Key',
  'Enter the Abyss',
  'Family Pest',
  'The Frozen Door',
  "The General's Shadow",
  'His Faithful Servants',
  "Hopespear's Will",
  'In Search of Knowledge',
  'Into the Tombs',
  'Lair of Tarn Razorlor',
  'Mage Arena I',
  'Mage Arena II',
  'Skippy and the Mogres',
]);

export type MiniQuest = z.infer<typeof MiniQuest>;

export const DiaryLocation = z.enum([
  'Ardougne',
  'Desert',
  'Falador',
  'Fremennik',
  'Kandarin',
  'Karamja',
  'Kourend & Kebos',
  'Lumbridge & Draynor',
  'Morytania',
  'Varrock',
  'Western Provinces',
  'Wilderness',
]);

export type DiaryLocation = z.infer<typeof DiaryLocation>;

export const DiaryTier = z.enum(['None', 'Easy', 'Medium', 'Hard', 'Elite']);

export type DiaryTier = z.infer<typeof DiaryTier>;

export const CombatAchievementTier = z.enum([
  'None',
  'Easy',
  'Medium',
  'Hard',
  'Elite',
  'Master',
  'Grandmaster',
]);

export type CombatAchievementTier = z.infer<typeof CombatAchievementTier>;

export const combatAchievementTierPoints = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
  Elite: 4,
  Master: 5,
  Grandmaster: 6,
} satisfies Record<Exclude<CombatAchievementTier, 'None'>, number>;

export const maximumSkillLevel = 99;

export const skillsCount = Object.values(Skill).length;

export const minimumTotalLevel = skillsCount + 9; // Hitpoints starts at 10

export const maximumTotalLevel = skillsCount * maximumSkillLevel;
