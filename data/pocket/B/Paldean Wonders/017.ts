import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'fr-fr': "Crocogril",
		'en-us': "Crocalor",
		'es-es': "Crocalor",
		'it-it': "Crocalor",
		'pt-br': "Crocalor",
		'de-de': "Lokroko"
  },
  illustrator: "kantaro",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Fire"],
  dexId: [910],
  evolveFrom: {
		'fr-fr': "Chochodile",
		'en-us': "Fuecoco",
		'es-es': "Fuecoco",
		'it-it': "Fuecoco",
		'pt-br': "Fuecoco",
		'de-de': "Krokel"
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
