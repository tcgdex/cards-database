import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Seaking",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		119,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Goldeen",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rising Lunge",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Horn Swipe",
			},
			effect: {
				en: "Flip 2 coins. If both are heads, this attack does 20 damage plus 40 more damage. If 1 or both are tails, this attack does 20 damage.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
