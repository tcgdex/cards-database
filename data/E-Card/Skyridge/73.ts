import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Ledyba",
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		165,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Gnaw",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

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
