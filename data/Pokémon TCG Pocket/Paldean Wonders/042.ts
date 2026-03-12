import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Bellibolt",
  },
  suffix: "EX",
  illustrator: "PLANETA Yamashita",
  rarity: "Four Diamond",
  category: "Pokemon",
  hp: 160,
  types: ["Lightning"],
  evolveFrom: {
    en: "Tadbulb",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "High-Voltage Cannon",
      },
      damage: "70+",
      cost: ["Lightning", "Lightning"],
      effect: {
        en: "If you have 4 or more Lightning Energy in play, this attack does 70 more damage.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;
