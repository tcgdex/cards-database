import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Tadbulb",
  },
  illustrator: "Saya Tsuruta",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Lightning"],
  dexId: [938],
  description: {
    en: "It floats using the electricity stored in its body. When thunderclouds are around, Tadbulb will float higher off the ground.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Electro Ball",
      },
      damage: 20,
      cost: ["Lightning"],
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