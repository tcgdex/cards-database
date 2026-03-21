import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Squawkabilly",
    fr: "Tapatoès"
  },
  illustrator: "Oswaldo KATO",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 70,
  types: ["Colorless"],
  dexId: [931],
  description: {
    en: "Green-feathered flocks hold the most sway. When they're out searching for food in the mornings and evenings, it gets very noisy.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Quick Attack",
      },
      damage: "30+",
      cost: ["Colorless", "Colorless"],
      effect: {
        en: "Flip a coin. If heads, this attack does 30 more damage.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;