import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Paldean Wooper",
		'fr-fr': "Axoloto de Paldea",
		'es-es': "Wooper de Paldea",
		'es-mx': "Wooper de Paldea",
		'de-de': "Paldea-Felino",
		'it-it': "Wooper di Paldea",
		'pt-br': "Wooper de Paldea"
  },
  illustrator: "Pani Kobayashi",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Darkness"],
  dexId: [194],
  description: {
    en: "It's dangerous for Wooper to travel alone. They line up in groups of three or four and help each other as they walk around the wetlands.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
				'en-us': "Flop",
				'fr-fr': "Flop",
				'de-de': "Flop"
      },
      damage: "40",
      cost: ["Darkness", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
