import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Ting-Lu",
    fr: "Dinglu"
  },
  illustrator: "AKIRA EGAWA",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Fighting"],
  dexId: [1003],
  description: {
    en: "It slowly brings its exceedingly heavy head down upon the ground, splitting the earth open with huge fissures that run over 160 feet deep.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Arrogant Impact",
      },
      damage: 130,
      cost: ["Fighting", "Fighting", "Fighting"],
      effect: {
        en: "If this Pokémon's remaining HP is 60 or less, this attack does nothing.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;