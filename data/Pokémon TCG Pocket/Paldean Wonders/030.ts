import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Balbalèze",
		en: "Cetitan",
		es: "Cetitan",
		it: "Cetitan",
		pt: "Cetitan",
		de: "Kolowal"
  },
  illustrator: "Anesaki Dynamic",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 150,
  types: ["Water"],
  dexId: [975],
  evolveFrom: {
		en: "Cetoddle",
		fr: "Piétacé",
		de: "Flaniwal",
		it: "Cetoddle",
		es: "Cetoddle",
		pt: "Cetoddle",
		'es-mx': "Cetoddle"
  },
  description: {
    en: "Ice energy builds up in the horn on its upper jaw, causing the horn to reach cryogenic temperatures that freeze its surroundings.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
				en: "Ice Punch",
				fr: "Poinglace",
				de: "Ice Punch"
      },
      damage: "80",
      cost: ["Water", "Water", "Colorless", "Colorless"],
      effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
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