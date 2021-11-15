import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Mudkip",
		fr: "Gobou"
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
				fr: "Tit'sieste"
			},
			effect: {
				en: "Remove 2 damage counters from Mudkip.",
				fr: "Retirez à Gobou 2 marqueurs de dégât."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade"
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





}

export default card
