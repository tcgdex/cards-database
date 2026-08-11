import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Crabrawler",
		'fr-fr': "Crabagarre",
		'es-es': "Crabrawler",
		'it-it': "Crabrawler",
		'pt-br': "Crabrawler",
		'de-de': "Krabbox"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		739,
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
				"Fighting",
			],
			name: {
				'en-us': "Light Punch",
				'fr-fr': "Poing Léger",
				'es-es': "Puño Ligero",
				'it-it': "Pugnetto",
				'pt-br': "Soco de Luz",
				'de-de': "Leichter Hieb"
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

	retreat: 2,

	description: {
		'en-us': "While guarding its weak points with its pincers, it looks for an opening and unleashes punches. When it loses, it foams at the mouth and faints.",
	},

	thirdParty: {
		cardmarket: 299475,
		tcgplayer: 138559
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
