import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
		'es-es': "Makuhita",
		'it-it': "Makuhita",
		'pt-br': "Makuhita",
		'de-de': "Makuhita"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		296,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Punch",
				'fr-fr': "Koud'Poing",
				'es-es': "Puño",
				'it-it': "Pugno",
				'pt-br': "Soco",
				'de-de': "Boxhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strength",
				'fr-fr': "Force",
				'es-es': "Fuerza",
				'it-it': "Forza",
				'pt-br': "Força",
				'de-de': "Stärke"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It toughens up by slamming into thick trees over and over. It gains a sturdy body and dauntless spirit.",
	},

	thirdParty: {
		cardmarket: 281715,
		tcgplayer: 92228
	}
}

export default card
