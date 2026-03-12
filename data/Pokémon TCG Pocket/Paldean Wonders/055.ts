import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Mankey",
  },
  illustrator: "nagimiso",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Fighting"],
  dexId: [56],
  description: {
    en: "It is extremely quick to anger. It could be docile one moment, then thrashing away the next instant.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Fury Swipes",
      },
      damage: "10×",
      cost: ["Fighting"],
      effect: {
        en: "Flip 3 coins. This attack does 10 damage for each heads.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Psychic",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;