import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Gholdengo",
		'fr-fr': "Gromago",
		'es-es': "Gholdengo",
		'it-it': "Gholdengo",
		'de-de': "Monetigo",
		'pt-br': "Gholdengo",
		'ko-kr': "타부자고"
  },
  suffix: "EX",
  illustrator: "takuyoa",
  rarity: "Four Diamond",
  category: "Pokemon",

  dexId: [1000],
  hp: 150,
  types: ["Metal"],
  evolveFrom: {
		'en-us': "Gimmighoul",
		'fr-fr': "Mordudor",
		'de-de': "Gierspenst",
		'it-it': "Gimmighoul",
		'es-es': "Gimmighoul",
		'pt-br': "Gimmighoul",
		'es-mx': "Gimmighoul"
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