import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Tinkatuff",
  },
  illustrator: "Akira Komayama",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 80,
  types: ["Metal"],
  dexId: [958],
  evolveFrom: {
    en: "Tinkatink",
  },
  description: {
    en: "These Pokémon make their homes in piles of scrap metal. They test the strength of each other's hammers by smashing them together.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Light Punch",
      },
      damage: "50",
      cost: ["Metal", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;