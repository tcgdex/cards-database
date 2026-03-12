import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Flittle",
  },
  illustrator: "kodama",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 50,
  types: ["Psychic"],
  dexId: [955],
  description: {
    en: "It spends its time running around wastelands. If anyone steals its beloved berries, it will chase them down and exact its revenge.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Flop",
      },
      damage: "10",
      cost: ["Psychic"],
    },
  ],
  weaknesses: [
    {
      type: "Darkness",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
