import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Varoom",
		'fr-fr': "Vrombi",
		'es-es': "Varoom",
		'it-it': "Varoom",
		'pt-br': "Varoom",
		'de-de': "Knattox"
  },
  illustrator: "nagimiso",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Metal"],
  dexId: [965],
  
  description: {
    en: "The steel section is Varoom's actual body. This Pokémon clings to rocks and converts the minerals within into energy to fuel its activities.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Ram",
        fr: "Collision",
        es: "Apisonar",
        'es-mx': "Colisión",
        de: "Ramme",
        it: "Carica",
        pt: "Aríete"
      },
      damage: "20",
      cost: ["Metal"],
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