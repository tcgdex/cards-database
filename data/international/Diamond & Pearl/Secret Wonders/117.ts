import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'de-de': "Voltobal"
	},

	illustrator: "Satoshi Ohta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Speed Ball",
				'fr-fr': "Balle rapide",
				'de-de': "Geschwindigkeitsball"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Big Explosion",
				'fr-fr': "Grosse explosion",
				'de-de': "Große Explosion"
			},
			effect: {
				'en-us': "Voltorb does 50 damage to itself.",
				'fr-fr': "Voltorbe s'inflige 50 dégâts.",
				'de-de': "Voltobal fügt sich selbst 50 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It looks just like a Poké Ball. It is dangerous because it may electrocute or explode on touch.",
	},

	thirdParty: {
		cardmarket: 277870,
		tcgplayer: 90418
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["tristan-robinson"]
		}
	]
}

export default card
