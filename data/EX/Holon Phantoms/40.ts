import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Donphan",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		232,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Phanpy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Rock Hurl",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
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
				en: "Double Spin",
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
			},
			damage: 50,

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
