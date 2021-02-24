import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Galarian Meowth",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Metal",
	],




	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Scratch",
			},

			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage for each heads.",
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
