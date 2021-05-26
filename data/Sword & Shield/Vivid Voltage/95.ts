import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Lycanroc",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rockruff",
	},



	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rock Throw",
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sharp Mane",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
