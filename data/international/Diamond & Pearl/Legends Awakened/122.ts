import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'de-de': "Sterndu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
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
				'en-us': "Recover",
				'fr-fr': "Soin",
				'de-de': "Genesung"
			},
			effect: {
				'en-us': "Discard an Energy attached to Staryu and remove 3 damage counters from Staryu.",
				'fr-fr': "Défaussez une Énergie attachée à Stari et retirez-lui 3 marqueurs de dégât.",
				'de-de': "Lege 1 an Sterndu angelegte Energie auf den Ablagestapel und entferne 3 Schadensmarken von Sterndu."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Spinning Attack",
				'fr-fr': "Attaque tournante",
				'de-de': "Rundumangriff"
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
		'en-us': "Its body is virtually composed of water. It shoots strange beams from its crystal-like eyes.",
	},

	thirdParty: {
		cardmarket: 278271,
		tcgplayer: 89550
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
