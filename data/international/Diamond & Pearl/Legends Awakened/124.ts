import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle",
		'de-de': "Schwalbini"
	},

	illustrator: "Takao Unno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		276,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Focus Energy",
				'fr-fr': "Puissance",
				'de-de': "Energiefokus"
			},
			effect: {
				'en-us': "During your next turn, Taillow's Peck attack's base damage is 30.",
				'fr-fr': "Lors de votre prochain tour, les dégâts de base de l'attaque Picpic de Nirondelle sont de 30.",
				'de-de': "In deinem nächsten Zug beträgt der Grundschaden von Schwalbinis Angriff Schnabel 30 Schadenspunkte."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'de-de': "Schnabel"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a gutsy spirit that makes it bravely take on tough foes. It flies in search of warm climates.",
	},

	thirdParty: {
		cardmarket: 278273,
		tcgplayer: 89735
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
