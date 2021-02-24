import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Wartortle",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		8,
	],
	hp: 70,
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
				"Water",
				"Colorless",
			],
			name: {
				en: "Withdraw",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Wartortle during your opponent's next turn. (Any other effects of attacks still happen.)",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
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
