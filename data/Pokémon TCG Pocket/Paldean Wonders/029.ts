import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Cetoddle",
  },
  illustrator: "Sekio",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Water"],
  dexId: [974],
  description: {
    en: "It lives in frigid regions in pods of five or so individuals. It loves the minerals found in snow and ice.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Icicle Missile",
      },
      damage: 60,
      cost: ["Water", "Water", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;