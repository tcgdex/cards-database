import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'fr-fr': "Frigodo",
		'en-us': "Frigibax",
		'es-es': "Frigibax",
		'it-it': "Frigibax",
		'pt-br': "Frigibax",
		'de-de': "Frospino"
  },
  illustrator: "AKIRA EGAWA",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Water"],
  dexId: [996],
  description: {
    en: "This Pokémon lives in forests and craggy areas. Using the power of its dorsal fin, it cools the inside of its nest like a refrigerator.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Chilly",
        fr: "Glacial",
        es: "Fresquito",
        'es-mx': "Frialdad",
        de: "Frösteln",
        it: "Addiaccio",
        pt: "Frio"
      },
      damage: "20",
      cost: ["Water"],
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
