import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Electrike",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		309,
	],
	hp: 40,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rear Kick",
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Skull Bash",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
