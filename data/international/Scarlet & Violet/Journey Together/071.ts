import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [859],
	set: Set,

	name: {
		'en-us': "Impidimp",
		'fr-fr': "Grimalin",
		'es-es': "Impidimp",
		'de-de': "Bähmon",
		'it-it': "Impidimp",
		'pt-br': "Impidimp",
		'es-mx': "Impidimp"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'de-de': "Sanfter Hieb",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'es-mx': "Cachetadita"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Haru Akasaka",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817223,
				tcgplayer: 623498
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817223,
				tcgplayer: 623498
			}
		},
	],
}

export default card
