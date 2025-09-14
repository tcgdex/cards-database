import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Giovanni's Nidoran♂",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		32,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Kick",
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Retaliation",
			},
			effect: {
				en: "You can't use this attack unless Giovanni's Nidoran M has 2 or more damage counters on it.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		},
	]
}

export default card
