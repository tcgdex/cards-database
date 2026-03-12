import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Chien-Pao",
  },
  suffix: "EX",
  illustrator: "aky CG Works",
  rarity: "Four Diamond",
  category: "Pokemon",
  hp: 130,
  types: ["Water"],
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Icicle",
      },
      damage: "20",
      cost: ["Water"],
    },
    {
      name: {
        en: "Diving Icicles",
      },
      cost: ["Water", "Water", "Water"],
      effect: {
        en: "Discard all Water Energy from this Pokémon. This attack does 130 damage to 1 of your opponent's Pokémon.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;