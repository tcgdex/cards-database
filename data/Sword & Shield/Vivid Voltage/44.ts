import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Pikachu VMAX",
	},
	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 310,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu V",
	},



	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "G-Max Volt Tackle",
			},
			effect: {
				en: "You may discard all Energy from this Pokémon. If you do, this attack does 150 more damage.",
			},
			damage: "120+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
