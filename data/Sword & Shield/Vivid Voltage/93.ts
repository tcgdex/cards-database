import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zygarde",
	},
	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Fightning",
	],




	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Beam",
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
				en: "Core Avenger",
			},
			effect: {
				en: "If you have more Prize cards remaining than your opponent, this attack does 80 more damage.",
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
