import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Mudkip",
		'fr-fr': "Gobou",
		'de-de': "Hydropi"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		258,
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
				'en-us': "Nap",
				'fr-fr': "Tit'sieste",
				'de-de': "Nickerchen"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Mudkip.",
				'fr-fr': "Retirez à Gobou 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von Hydropi."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
				'de-de': "Kaskade"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277139,
		tcgplayer: 87612
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
