import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Diglett",
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		50,
	],
	hp: 30,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Dig",
			},

			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Mud Slap",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
