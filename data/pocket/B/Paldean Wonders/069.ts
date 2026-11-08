import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Shroodle",
		'fr-fr': "Gribouraigne",
		'de-de': "Sproxi",
		'it-it': "Shroodle",
		'es-es': "Shroodle",
		'pt-br': "Shroodle",
		'es-mx': "Shroodle"
  },
  illustrator: "Akira Komayama",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 50,
  types: ["Darkness"],
  dexId: [944],
  description: {
    en: "To keep enemies away from its territory, it paints markings around its nest using a poisonous liquid that has an acrid odor.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Scratch"
      },
      damage: 20,
      cost: ["Colorless"],
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