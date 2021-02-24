import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Gogoat",
	},
	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiddo",
	},



	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
			},

			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Take Down",
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
			},
			damage: 160,

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
