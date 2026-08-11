import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'fr-fr': "Zapétrel",
		'en-us': "Wattrel",
		'es-es': "Wattrel",
		'it-it': "Wattrel",
		'pt-br': "Wattrel",
		'de-de': "Voltrel"
  },
  illustrator: "sowsow",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Lightning"],
  dexId: [940],
  description: {
    en: "These Pokémon make their nests on coastal cliffs. The nests have a strange, crackling texture, and they're a popular delicacy.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Flap",
        fr: "Battement",
        es: "Aleteo",
        it: "Alabattito",
        de: "Flattern",
        'pt-br': "Asa",
        ko: "홰치기"
      },
      damage: 20,
      cost: ["Lightning"],
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
