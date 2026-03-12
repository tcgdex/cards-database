import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Pawmot",
  },
  illustrator: "Mizue",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 140,
  types: ["Lightning"],
  dexId: [923],
  evolveFrom: {
    en: "Pawmo",
  },
  description: {
    en: "Pawmot's fluffy fur acts as a battery. It can store the same amount of electricity as an electric car.",
  },
  stage: "Stage2",
  attacks: [
    {
      name: {
        en: "Thunder Blast",
      },
      damage: "100",
      cost: ["Lightning", "Lightning"],
      effect: {
        en: "Discard a Lightning Energy from this Pokémon.",
      },
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