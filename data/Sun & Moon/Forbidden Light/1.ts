import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		102,
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
				en: "Multiply",
				fr: "Multiplication",
			},
			effect: {
				en: "Search your deck for Exeggcute and put it onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez Noeunoeuf dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
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
