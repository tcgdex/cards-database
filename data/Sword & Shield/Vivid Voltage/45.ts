import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Voltorb",
	},
	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 60,
	types: [
		"Lightning",
	],




	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Electro Ball",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
