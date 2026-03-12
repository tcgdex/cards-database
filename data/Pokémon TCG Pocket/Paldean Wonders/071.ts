import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Bombirdier",
  },
  illustrator: "nagimiso",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Darkness"],
  dexId: [962],
  description: {
    en: "Bombirdier uses the apron on its chest to bundle up food, which it carries back to its nest. It enjoys dropping things that make loud noises.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Fly",
      },
      damage: "70",
      cost: ["Colorless", "Colorless", "Colorless"],
      effect: {
        en: "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
