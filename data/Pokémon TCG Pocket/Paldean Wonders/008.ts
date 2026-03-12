import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Dolliv",
  },
  illustrator: "Mizue",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Grass"],
  dexId: [929],
  evolveFrom: {
    en: "Smoliv",
  },
  description: {
    en: "Dolliv shares its tasty, fresh-scented oil with others. This species has coexisted with humans since times long gone.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Seed Bomb",
      },
      damage: "40",
      cost: ["Grass", "Colorless"],
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