import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Orthworm",
    fr: "Ferdeter"
  },
  illustrator: "Pani Kobayashi",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Metal"],
  dexId: [968],
  description: {
    en: "This Pokémon lives in arid deserts. It maintains its metal body by consuming iron from the soil.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Iron Supply",
      },
      damage: 10,
      cost: ["Metal"],
      effect: {
        en: "Take a Metal Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;