import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Ceruledge",
  },
  illustrator: "Ryota Murayama",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 110,
  types: ["Psychic"],
  dexId: [937],
  evolveFrom: {
    en: "Charcadet",
  },
  description: {
    en: "An old set of armor steeped in grudges caused this Pokémon's evolution. Ceruledge cuts its enemies to pieces without mercy.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Fighting Sword",
      },
      damage: "70+",
      cost: ["Psychic", "Psychic", "Colorless"],
      effect: {
        en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 70 more damage.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Darkness",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;