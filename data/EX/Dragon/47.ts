import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Vibrava",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		329,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Trapinch",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Dive",
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Turn",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
			},
			damage: 40,

		},
	],






}

export default card
