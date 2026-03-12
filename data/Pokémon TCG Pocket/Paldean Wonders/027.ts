import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Finizen",
  },
  illustrator: "kodama",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Water"],
  dexId: [963],
  description: {
    en: "Its water ring is made from seawater mixed with a sticky fluid that Finizen secretes from its blowhole.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Razor Fin",
      },
      damage: "20",
      cost: ["Water"],
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;