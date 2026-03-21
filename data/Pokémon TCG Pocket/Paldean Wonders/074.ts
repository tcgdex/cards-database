import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Tinkaton",
    fr: "Forgelina"
  },
  illustrator: "KEIICHIRO ITO",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 150,
  types: ["Metal"],
  dexId: [959],
  evolveFrom: {
    en: "Tinkatuff",
    fr: "Forgella"
  },
  description: {
    en: "The hammer tops 220 pounds, yet it gets swung around easily by Tinkaton as it steals whatever it pleases and carries its plunder back home.",
  },
  stage: "Stage2",
  attacks: [
    {
      name: {
        en: "Gigaton Hammer",
      },
      damage: "140",
      cost: ["Metal", "Metal", "Colorless"],
      effect: {
        en: "During your next turn, this Pokémon can't use Gigaton Hammer.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;