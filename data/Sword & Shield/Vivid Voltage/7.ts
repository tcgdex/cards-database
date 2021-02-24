import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Yanmega",
	},
	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Yanma",
	},



	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "U-turn",
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
