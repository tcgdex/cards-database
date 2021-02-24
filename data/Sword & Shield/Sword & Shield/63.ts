import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Snom",
		fr: "Frissonille",
	},
	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
