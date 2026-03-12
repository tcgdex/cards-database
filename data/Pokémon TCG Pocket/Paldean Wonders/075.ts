import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Varoom",
  },
  illustrator: "nagimiso",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Metal"],
  dexId: [965],
  evolveFrom: {
    en: "Basic",
  },
  description: {
    en: "The steel section is Varoom's actual body. This Pokémon clings to rocks and converts the minerals within into energy to fuel its activities.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Ram",
      },
      damage: "20",
      cost: ["Metal"],
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