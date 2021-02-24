import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Porygon",
	},
	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		137,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Data Sort",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Trainer card in your discard pile, show it to your opponent, and shuffle it into your deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
