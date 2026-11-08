import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Gible",
		'fr-fr': "Griknot",
		'es-es': "Gible",
		'it-it': "Gible",
		'pt-br': "Gible",
		'de-de': "Kaumalat"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		443,
	],

	hp: 50,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Fighting",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It attacks using its huge mouth. While its attacks are powerful, it hurts itself out of clumsiness, too.",
	},

	thirdParty: {
		cardmarket: 280525,
		tcgplayer: 85702
	}
}

export default card
