import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Wo-Chien",
    fr: "Chongjian"
  },
  illustrator: "Kouki Saitou",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Grass"],
  dexId: [1001],
  description: {
    en: "It drains the life-force from vegetation, causing nearby forests to instantly wither and fields to turn barren.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Binding Greed",
      },
      damage: "90",
      cost: ["Grass", "Grass", "Grass", "Colorless"],
      effect: {
        en: "During your opponent's next turn, attacks used by the Defending Pokémon cost 2 Colorless more.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;