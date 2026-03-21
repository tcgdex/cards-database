import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Quaxly",
    fr: "Coiffeton"
  },
  illustrator: "Naoki Saito",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Water"],
  dexId: [912],
  description: {
    en: "Its strong legs let it easily swim around in even fast-flowing rivers. It likes to keep things tidy and is prone to overthinking things.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Splashing Dodge",
      },
      damage: "10",
      cost: ["Water"],
      effect: {
        en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
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