import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Kakuna",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weedle",
	},



	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bug Bite",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
