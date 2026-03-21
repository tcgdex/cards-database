import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Koraidon",
    fr: "Koraidon"
  },
  illustrator: "Kouki Saitou",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Fighting"],
  dexId: [1007],
  description: {
    en: "This Pokémon resembles Cyclizar, but it is far burlier and more ferocious. Nothing is known about its ecology or other features.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Rampaging Fang",
      },
      damage: 120,
      cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
      effect: {
        en: "Discard 2 Fighting Energy from this Pokémon.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Psychic",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;
