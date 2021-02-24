import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Lanturn",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		171,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Chinchou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Lightning Ball",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Conduction",
			},
			effect: {
				en: "Discard all Energy cards attached to Lanturn. Flip a number of coins equal to the number of Energy cards you discarded. This attack does 30 damage plus 40 more damage for each heads.",
			},
			damage: 30,

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
