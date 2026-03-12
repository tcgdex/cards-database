import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Miraidon",
  },
  illustrator: "Kouki Saitou",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Lightning"],
  dexId: [1008],
  description: {
    en: "This seems to be the Iron Serpent mentioned in an old book. The Iron Serpent is said to have turned the land to ash with its lightning.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Lightning Laser",
      },
      damage: "60",
      cost: ["Lightning", "Lightning", "Lightning"],
      effect: {
        en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;