import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

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
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Dig",
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
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

	thirdParty: {
		cardmarket: 273994
	}
}

export default card
