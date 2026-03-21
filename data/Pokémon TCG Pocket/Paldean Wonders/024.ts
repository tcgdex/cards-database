import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Quaquaval",
    fr: "Palmaval"
  },
  illustrator: "Kouki Saitou",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 150,
  types: ["Water"],
  dexId: [914],
  evolveFrom: {
    en: "Quaxwell",
    fr: "Canarbello"
  },
  description: {
    en: "Dancing in ways that evoke far-away places, this Pokémon mesmerizes all that see it. Flourishes of its decorative water feathers slice into its foes.",
  },
  stage: "Stage2",
  abilities: [
    {
      type: "Ability",
      name: {
        en: "Torrent",
      },
      effect: {
        en: "If this Pokémon's remaining HP is 50 or less, attacks used by this Pokémon do +60 damage to your opponent's Active Pokémon.",
      },
    },
  ],
  attacks: [
    {
      name: {
        en: "Hydro Kick",
      },
      damage: 90,
      cost: ["Water", "Water", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;