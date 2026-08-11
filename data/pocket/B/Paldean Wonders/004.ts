import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  
	name: {
		'fr-fr': "Tissenboule",
		'en-us': "Tarountula",
		'es-es': "Tarountula",
		'it-it': "Tarountula",
		'pt-br': "Tarountula",
		'de-de': "Tarundel"
	},

  illustrator: "Mina Nakai",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 50,
  types: ["Grass"],
  dexId: [917],
  description: {
    en: "The thread it secretes from its rear is as strong as wire. The secret behind the thread's strength is the topic of ongoing research.",
  },
  stage: "Basic",
  attacks: [
    {
			name: {
				'en-us': "Hook",
				'fr-fr': "Crochet",
				'de-de': "Hook"
			},
      damage: 20,
      cost: ["Grass"],
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