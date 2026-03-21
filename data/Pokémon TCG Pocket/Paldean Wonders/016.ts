import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Fuecoco",
    fr: "Chochodile"
  },
  illustrator: "Akira Komayama",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 70,
  types: ["Fire"],
  dexId: [909],
  description: {
    en: "Its flame sac is small, so energy is always leaking out. This energy is released from the dent atop Fuecoco's head and flickers to and fro.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Cheerful Singing",
      },
      cost: ["Colorless"],
      effect: {
        en: "Put 1 random Basic Pokémon from your deck onto your Bench.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Water",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;