import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Arctibax",
    fr: "Cryodo"
  },
  illustrator: "Kouki Saitou",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Water"],
  dexId: [997],
  evolveFrom: {
    en: "Frigibax",
    fr: "Frigodo"
  },
  description: {
    en: "It attacks with the blade of its frozen dorsal fin by doing a front flip in the air. Arctibax’s strong back and legs allow it to pull off this technique.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Frost Smash",
      },
      damage: "50",
      cost: ["Water", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;