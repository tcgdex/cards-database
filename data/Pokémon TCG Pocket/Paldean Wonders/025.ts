import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Wiglett",
		fr: "Taupikeau",
		es: "Wiglett",
		it: "Wiglett",
		de: "Schligda",
		'pt-br': "Wiglett",
		ko: "바다그다"
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
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre",
				it: "Pistolacqua"
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