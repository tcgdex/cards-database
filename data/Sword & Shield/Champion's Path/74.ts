import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Charizard VMAX",
	},
	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 330,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charizard V",
	},



	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
			},

			damage: 100,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "G-Max Wildfire",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
			},
			damage: 300,

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
