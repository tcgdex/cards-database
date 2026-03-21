import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Mabosstiff",
    fr: "Dogrino"
  },
  illustrator: "KIYOTAKA OSHIYAMA",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Darkness"],
  dexId: [943],
  evolveFrom: {
    en: "Maschiff",
    fr: "Grondogue"
  },
  description: {
    en: "Mabosstiff loves playing with children. Though usually gentle, it takes on an intimidating look when protecting its family.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Wild Tackle",
      },
      damage: "110",
      cost: ["Darkness", "Darkness", "Colorless"],
      effect: {
        en: "This Pokémon also does 20 damage to itself.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;