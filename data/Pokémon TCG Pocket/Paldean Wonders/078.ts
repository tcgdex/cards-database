import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Gholdengo",
    fr: "Gromago"
  },
  suffix: "EX",
  illustrator: "takuyoa",
  rarity: "Four Diamond",
  category: "Pokemon",
  hp: 150,
  types: ["Metal"],
  evolveFrom: {
    en: "Gimmighoul",
    fr: "Mordudor"
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Spending Rush",
      },
      damage: "40",
      cost: ["Metal"],
      effect: {
        en: "1 of your opponent's Pokémon is chosen at random for each Metal Energy attached to this Pokémon. For each time a Pokémon was chosen, do 40 damage to it. ",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;