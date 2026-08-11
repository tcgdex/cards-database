import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Panpour",
		'fr-fr': "Flotajou",
		'es-es': "Panpour",
		'it-it': "Panpour",
		'pt-br': "Panpour",
		'de-de': "Sodamak"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		515,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collecte",
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It does not thrive in dry environments. It keeps itself damp by shooting water stored in its head tuft from its tail.",
	},

	thirdParty: {
		cardmarket: 279987,
		tcgplayer: 87928
	}
}

export default card
