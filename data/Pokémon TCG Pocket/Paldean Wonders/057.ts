import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Annihilape",
    fr: "Courrousinge"
  },
  illustrator: "Anesaki Dynamic",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 140,
  types: ["Fighting"],
  dexId: [979],
  evolveFrom: {
    en: "Primeape",
    fr: "Colossinge"
  },
  description: {
    en: "It imbues its fists with the power of the rage that it kept hidden in its heart. Opponents struck by these imbued fists will be shattered to their core.",
  },
  stage: "Stage2",
  attacks: [
    {
      name: {
        en: "Dynamite Punch",
      },
      damage: "90",
      cost: ["Fighting"],
      effect: {
        en: "This Pokémon also does 30 damage to itself.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Psychic",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
