import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Aron",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		304,
	],
	hp: 40,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Mud Slap",
			},

			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
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
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
