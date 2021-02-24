import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Weedle",
		fr: "Aspicot",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		13,
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
				en: "Multiply",
				fr: "Multiplication",
			},
			effect: {
				en: "Search your deck for Weedle and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez Aspicot dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
