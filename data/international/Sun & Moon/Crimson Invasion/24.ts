import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'es-es': "Corphish",
		'it-it': "Corphish",
		'pt-br': "Corphish",
		'de-de': "Krebscorps"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		341,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-Masse",
				'es-es': "Martillazo",
				'it-it': "Martellata",
				'pt-br': "Martelo Caranguejo",
				'de-de': "Krabbhammer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "No matter how dirty the water in the river, it will adapt and thrive. It has a strong will to survive.",
	},

	thirdParty: {
		cardmarket: 311874,
		tcgplayer: 149045
	}
}

export default card
