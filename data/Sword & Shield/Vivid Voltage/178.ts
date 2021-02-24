import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Togekiss V",
	},
	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,

	hp: 200,
	types: [
		"Colorless",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "White Wind",
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 70 more damage.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Wing",
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
