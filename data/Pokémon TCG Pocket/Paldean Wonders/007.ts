import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Smoliv",
  },
  illustrator: "yuu",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Grass"],
  dexId: [928],
  description: {
    en: "It protects itself from enemies by emitting oil from the fruit on its head. This oil is bitter and astringent enough to make someone flinch.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Absorb",
      },
      damage: "10",
      cost: ["Grass"],
      effect: {
        en: "Heal 10 damage from this Pokémon.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;