import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Dewott",
	},
	illustrator: "Megumi Higuchi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Oshawott",
	},



	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Wash",
			},
			effect: {
				en: "You may put an Energy attached to your opponent’s Active Pokémon into their hand.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
