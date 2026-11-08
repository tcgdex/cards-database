import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "Its four horns are a high-performance radar system. It uses them to sense sounds and smells, rather than using ears or a nose.",
	},


	name: {
		'en-us': "Sliggoo",
		'fr-fr': "Colimucus",
		'es-es': "Sliggoo",
		'es-mx': "Sliggoo",
		'de-de': "Viscargot",
		'it-it': "Sliggoo",
		'pt-br': "Sliggoo"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [705],
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Goomy"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'es-mx': "Cachetadita",
			'de-de': "Sanfter Hieb",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha"
		},

		cost: ["Water", "Psychic"],
		damage: 70
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886459,
				tcgplayer: 693545
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886459,
				tcgplayer: 693545
			}
		},
	],
}

export default card
