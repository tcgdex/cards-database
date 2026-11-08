import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Venipede",
		'fr-fr': "Venipatte",
		'es-es': "Venipede",
		'it-it': "Venipede",
		'pt-br': "Venipede",
		'de-de': "Toxiped"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		543,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its bite injects a potent poison, enough to paralyze large bird Pokémon that try to prey on it.",
	},

	thirdParty: {
		cardmarket: 279790,
		tcgplayer: 90294
	}
}

export default card
