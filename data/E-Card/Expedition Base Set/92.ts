import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Wartortle",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		8,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Squirtle",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Doubleslap",
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Giant Wave",
			},
			effect: {
				en: "Wartortle can't attack during your next turn.",
			},
			damage: 40,

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
