import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Nymble",
  },
  illustrator: "Kouki Saitou",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 40,
  types: ["Grass"],
  dexId: [919],
  description: {
    en: "It's highly skilled at a fighting style in which it uses its jumping capabilities to dodge incoming attacks while also dealing damage to opponents.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "U-turn",
      },
      damage: "10",
      cost: ["Colorless"],
      effect: {
        en: "Switch this Pokémon with 1 of your Benched Pokémon.",
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