import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Clobbopus",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Fightning",
	],




	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Beat",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Hammer In",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
