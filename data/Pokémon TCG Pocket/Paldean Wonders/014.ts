import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Rellor",
  },
  illustrator: "Anesaki Dynamic",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 50,
  types: ["Grass"],
  dexId: [953],
  evolveFrom: {
    en: "Rellor",
  },
  description: {
    en: "It rolls its mud ball around while the energy it needs for evolution matures. Eventually the time comes for it to evolve.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Ball Roll",
      },
      damage: "20×",
      cost: ["Colorless"],
      effect: {
        en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
      },
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