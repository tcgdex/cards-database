import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Crocalor",
    fr: "Crocogril"
  },
  illustrator: "kantaro",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Fire"],
  dexId: [910],
  evolveFrom: {
    en: "Fuecoco",
    fr: "Chochodile"
  },
  description: {
    en: "The valve in Crocalor's flame sac is closely connected to its vocal cords. This Pokémon utters a guttural cry as it spews flames every which way.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Bite",
      },
      damage: 50,
      cost: ["Fire", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Water",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;
