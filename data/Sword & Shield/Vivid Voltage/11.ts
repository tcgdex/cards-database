import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Nuzleaf",
	},
	illustrator: "otumami",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Seedot",
	},



	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Razor Leaf",
			},

			damage: 40,

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
