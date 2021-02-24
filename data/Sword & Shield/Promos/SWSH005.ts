import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		fr: "Miaouss VMAX",
	},
	illustrator: "aky CG Works",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 300,
	types: [
		"Colorless",
	],
	evolveFrom: {
		fr: "Miaouss V",
	},
	stage: "VMAX",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Pactole G-MAX",
			},
			effect: {
				fr: "Piochez 3 cartes.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
