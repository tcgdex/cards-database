import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Klawf",
    fr: "Craparoi"
  },
  illustrator: "nagimiso",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Fighting"],
  dexId: [950],
  description: {
    en: "This Pokémon lives on sheer cliffs. It sidesteps opponents’ attacks, then lunges for their weak spots with its claws.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Adrenaline Hammer",
      },
      damage: "70",
      cost: ["Fighting", "Fighting"],
      effect: {
        en: "This Pokémon is now Confused.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;