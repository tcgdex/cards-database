import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Houndour",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		228,
	],
	hp: 50,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Retaliate",
			},
			effect: {
				en: "This attack does 10 damage times the number of damage counters on Houndour.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fireworks",
			},
			effect: {
				en: "Flip a coin. If tails, discard a Energy card attached to Houndour.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
