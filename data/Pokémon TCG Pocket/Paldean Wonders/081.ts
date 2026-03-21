import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Tandemaus",
    fr: "Compagnol"
  },
  illustrator: "Akira Komayama",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 30,
  types: ["Colorless"],
  dexId: [924],
  description: {
    en: "The pair sticks together no matter what. They split any food they find exactly in half and then eat it together.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Double Hit",
      },
      damage: "30×",
      cost: ["Colorless", "Colorless"],
      effect: {
        en: "Flip 2 coins. This attack does 30 damage for each heads.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
};

export default card;