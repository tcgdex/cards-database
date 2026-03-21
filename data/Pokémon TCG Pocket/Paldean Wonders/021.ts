import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Chi-Yu",
    fr: "Yuyu"
  },
  illustrator: "Dsuke",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 80,
  types: ["Fire"],
  dexId: [1004],
  description: {
    en: "The envy accumulated within curved beads that sparked multiple conflicts has clad itself in fire and become a Pokémon.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Megafire of Envy",
      },
      damage: "40+",
      cost: ["Fire", "Colorless"],
      effect: {
        en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Water",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;