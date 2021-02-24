import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Treecko",
	},
	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		252,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],

	retreat: 1,



}

export default card
