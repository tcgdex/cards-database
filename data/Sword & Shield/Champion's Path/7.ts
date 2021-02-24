import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Victini",
	},
	illustrator: "Taira Akitsu",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Fire",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Draw",
			},
			effect: {
				en: "Draw a card.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
