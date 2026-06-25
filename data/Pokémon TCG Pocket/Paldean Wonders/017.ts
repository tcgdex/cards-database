import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Crocogril",
		en: "Crocalor",
		es: "Crocalor",
		it: "Crocalor",
		pt: "Crocalor",
		de: "Lokroko"
  },
  illustrator: "kantaro",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Fire"],
  dexId: [910],
  evolveFrom: {
		fr: "Chochodile",
		en: "Fuecoco",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
  },
  description: {
    en: "The valve in Crocalor's flame sac is closely connected to its vocal cords. This Pokémon utters a guttural cry as it spews flames every which way.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Bite",
        fr: "Morsure",
        de: "Biss",
        it: "Morso",
        es: "Mordisco",
        pt: "Mordida",
        'es-mx': "Mordida"
      },
      damage: 50,
      cost: ["Fire", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Water",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;
