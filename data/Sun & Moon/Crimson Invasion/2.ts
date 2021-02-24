import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort",
	},
	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		14,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},
	stage: "Stage1",


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
				en: "Search your deck for up to 3 Kakuna and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 Coconfort dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
