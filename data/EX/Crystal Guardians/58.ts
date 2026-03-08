import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Mudkip",
		fr: "Gobou",
		de: "Hydropi"
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
				en: "Nap",
				fr: "Tit'sieste",
				de: "Nickerchen"
			},
			effect: {
				en: "Remove 2 damage counters from Mudkip.",
				fr: "Retirez à Gobou 2 marqueurs de dégât.",
				de: "Entferne 2 Schadensmarken von Hydropi."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
				de: "Kaskade"
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
		cardmarket: 277138,
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
