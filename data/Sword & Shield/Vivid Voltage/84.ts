import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Quagsire",
	},
	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Wooper",
	},



	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beat",
			},

			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fickle Impact",
			},
			effect: {
				en: "If you have exactly 2, 4, or 6 Prize cards remaining, this attack does nothing.",
			},
			damage: 180,

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
