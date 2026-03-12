import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Quaxwell",
  },
  illustrator: "kirisAki",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 80,
  types: ["Water"],
  dexId: [913],
  evolveFrom: {
    en: "Quaxly",
  },
  description: {
    en: "The hardworking Quaxwell observes people and Pokémon from various regions and incorporates their movements into its own dance routines.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Splashing Turn",
      },
      damage: "40",
      cost: ["Water", "Water"],
      effect: {
        en: "Switch this Pokémon with 1 of your Benched Pokémon.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: [1],
};

export default card;
