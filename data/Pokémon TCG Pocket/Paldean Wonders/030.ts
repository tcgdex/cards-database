import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Cetitan",
    fr: "Balbalèze"
  },
  illustrator: "Anesaki Dynamic",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 150,
  types: ["Water"],
  dexId: [975],
  evolveFrom: {
    en: "Cetoddle",
    fr: "Piétacé"
  },
  description: {
    en: "Ice energy builds up in the horn on its upper jaw, causing the horn to reach cryogenic temperatures that freeze its surroundings.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Ice Punch",
      },
      damage: "80",
      cost: ["Water", "Water", "Colorless", "Colorless"],
      effect: {
        en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 4,
};

export default card;