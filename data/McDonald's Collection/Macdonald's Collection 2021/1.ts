import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Bulbasaur",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		1,
	],
	hp: 70,
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
				en: "Razor Leaf",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],

	retreat: 2,



}

export default card
