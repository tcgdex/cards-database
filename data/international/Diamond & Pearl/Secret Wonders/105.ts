import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Shellder",
		'fr-fr': "Kokiyas",
		'de-de': "Muschas"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		90,
	],

	hp: 50,

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
				'en-us': "Shell Rest",
				'fr-fr': "Repos coquillage",
				'de-de': "Panzerruhe"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Shellder.",
				'fr-fr': "Retirez à Kokiyas 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von Muschas."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Tongue Slap",
				'fr-fr': "Gros coup de langue",
				'de-de': "Zungenschelle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It swims backwards by opening and closing its two shells. Its large tongue is always kept hanging out.",
	},

	thirdParty: {
		cardmarket: 277858,
		tcgplayer: 89138
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
