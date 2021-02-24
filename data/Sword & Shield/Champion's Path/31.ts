import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Rolycoly",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Fightning",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
			},

			damage: 10,

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
