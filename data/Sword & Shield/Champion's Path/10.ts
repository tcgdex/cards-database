import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Centiskorch",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Sizzlipede",
	},



	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Crawler",
			},

			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
