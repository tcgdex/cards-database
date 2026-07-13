import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [447],
	set: Set,

	name: {
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		it: "Riolu",
		pt: "Riolu",
		de: "Riolu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Jab",
			fr: "Taquet",
			es: "Puya",
			it: "Stoccata",
			pt: "Murro",
			de: "Boxschlag"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Low Kick",
			fr: "Balayage",
			es: "Patada Baja",
			it: "Colpo Basso",
			pt: "Rasteira",
			de: "Fußkick"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "Naoyo Kimura",

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
    {
      type: "reverse",
      size: "standard"
    },
    {
      type: "normal",
      size: "standard"
    }
  ],

	description: {
		en: "They communicate with one another using their auras. They are able to run all through the night.",
	},

	thirdParty: {
        cardmarket: 702408,
        tcgplayer: 488001
    }
}

export default card