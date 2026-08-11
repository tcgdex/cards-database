import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Lechonk",
		'fr-fr': "Gourmelet",
		'es-es': "Lechonk",
		'de-de': "Ferkuli",
		'it-it': "Lechonk",
		'pt-br': "Lechonk",
		'es-mx': "Lechonk"
  },
  illustrator: "kodama",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Colorless"],
  dexId: [915],
  description: {
    en: "This Pokémon spurns all but the finest of foods. Its body gives off an herblike scent that bug Pokémon detest.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle",
				'it-it': "Azione"
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