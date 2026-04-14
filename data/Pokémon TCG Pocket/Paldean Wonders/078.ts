import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Gholdengo",
		fr: "Gromago",
		es: "Gholdengo",
		it: "Gholdengo",
		de: "Monetigo",
		'pt-br': "Gholdengo",
		ko: "타부자고"
  },
  suffix: "EX",
  illustrator: "takuyoa",
  rarity: "Four Diamond",
  category: "Pokemon",

  dexId: [1000],
  hp: 150,
  types: ["Metal"],
  evolveFrom: {
		en: "Gimmighoul",
		fr: "Mordudor",
		de: "Gierspenst",
		it: "Gimmighoul",
		es: "Gimmighoul",
		pt: "Gimmighoul",
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