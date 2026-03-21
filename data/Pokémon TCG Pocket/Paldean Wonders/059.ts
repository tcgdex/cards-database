import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Toedscool",
    fr: "Terracool"
  },
  illustrator: "Oswaldo KATO",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Fighting"],
  dexId: [948],
  description: {
    en: "Toedscool lives in muggy forests. The flaps that fall from its body are chewy and very delicious.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Smash Kick",
      },
      damage: "20",
      cost: ["Fighting"],
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
