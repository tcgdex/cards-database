import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Heracross",
	},
	illustrator: undefined,
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		214,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Tackle",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Charging Horn",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, this attack does 30 damage.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
