import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'fr-fr': "Balbalèze",
		'en-us': "Cetitan",
		'es-es': "Cetitan",
		'it-it': "Cetitan",
		'pt-br': "Cetitan",
		'de-de': "Kolowal"
  },
  illustrator: "Anesaki Dynamic",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 150,
  types: ["Water"],
  dexId: [975],
  evolveFrom: {
		'en-us': "Cetoddle",
		'fr-fr': "Piétacé",
		'de-de': "Flaniwal",
		'it-it': "Cetoddle",
		'es-es': "Cetoddle",
		'pt-br': "Cetoddle",
		'es-mx': "Cetoddle"
  },
  description: {
    en: "Ice energy builds up in the horn on its upper jaw, causing the horn to reach cryogenic temperatures that freeze its surroundings.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
				'en-us': "Ice Punch",
				'fr-fr': "Poinglace",
				'de-de': "Ice Punch"
      },
      damage: "80",
      cost: ["Water", "Water", "Colorless", "Colorless"],
      effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
      },
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 4,
};

export default card;