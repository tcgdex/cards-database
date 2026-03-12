import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Sprigatito"
  },
  illustrator: "Saya Tsuruta",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Grass"],
  dexId: [906],
  description: {
    en: "The sweet scent its body gives off mesmerizes those around it. The scent grows stronger when this Pokémon is in the sun."
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Leafage"
      },
      damage: 20,
      cost: ["Grass"]
    }
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20"
    }
  ],
  retreat: 1
};

export default card;