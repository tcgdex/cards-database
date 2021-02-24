import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Pansage",
	},
	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 60,
	types: [
		"Grass",
	],




	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Seed Bomb",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
