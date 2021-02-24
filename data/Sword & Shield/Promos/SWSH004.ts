import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		fr: "Miaouss V",
	},
	illustrator: "aky CG Works",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 180,
	types: [
		"Colorless",
	],

	stage: "Basic",
	suffix: "V",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Jackpot",
			},
			effect: {
				fr: "Piocher une carte.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Griffe Taillante",
			},

			damage: 130,

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
