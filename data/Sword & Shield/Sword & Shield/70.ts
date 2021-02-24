import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Joltik",
		fr: "Statitik",
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 50,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Flop",
				fr: "Flop",
			},

			damage: 10,

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
