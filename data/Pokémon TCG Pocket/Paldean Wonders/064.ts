import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Paldean Wooper",
    fr: "Axoloto de Paldea"
  },
  illustrator: "Pani Kobayashi",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Darkness"],
  dexId: [194],
  description: {
    en: "It's dangerous for Wooper to travel alone. They line up in groups of three or four and help each other as they walk around the wetlands.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Flop",
      },
      damage: "40",
      cost: ["Darkness", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
