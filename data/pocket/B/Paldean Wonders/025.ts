import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Wiglett",
		'fr-fr': "Taupikeau",
		'es-es': "Wiglett",
		'it-it': "Wiglett",
		'de-de': "Schligda",
		'pt-br': "Wiglett",
		'ko-kr': "바다그다"
  },
  illustrator: "Shin Nagasawa",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Water"],
  dexId: [960],
  description: {
    en: "Though it looks like Diglett, Wiglett is an entirely different species. The resemblance seems to be a coincidental result of environmental adaptation.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'de-de': "Aquaknarre",
				'it-it': "Pistolacqua"
      },
      damage: "20",
      cost: ["Water"],
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