import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Maschiff",
  },
  illustrator: "KEIICHIRO ITO",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 70,
  types: ["Darkness"],
  dexId: [942],
  description: {
    en: "Its well-developed jaw and fangs are strong enough to crunch through boulders, and its thick fat makes for an excellent defense.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Bite",
      },
      damage: "30",
      cost: ["Darkness", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;
