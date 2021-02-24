import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Mudkip",
	},
	illustrator: "Atsuko Nishida",
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
				"Water",
			],
			name: {
				en: "Tail Strike",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			},
			damage: 10,

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
