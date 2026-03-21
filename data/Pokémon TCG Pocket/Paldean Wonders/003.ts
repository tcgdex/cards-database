import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Meowscarada",
    fr: "Miascarade"
  },
  suffix: "EX",
  illustrator: "5ban Graphics",
  rarity: "Four Diamond",
  category: "Pokemon",
  hp: 160,
  types: ["Grass"],
  evolveFrom: {
    en: "Floragato",
    fr: "Matourgeon"
  },
  stage: "Stage2",
  attacks: [
    {
      name: {
        en: "Flower Trick",
      },
      cost: ["Grass"],
      effect: {
        en: "Choose a spot from among your opponent's Active Spot and Bench. At the end of your opponent's next turn, do 70 damage to the Pokémon in the spot you chose.",
      },
    },
    {
      name: {
        en: "Solar Beam",
      },
      damage: 80,
      cost: ["Grass", "Grass"],
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
