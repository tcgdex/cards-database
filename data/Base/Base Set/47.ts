import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
		de: "Digda"
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
				fr: "Tunnel",
				de: "Schaufler"
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
				fr: "Jet de boue",
				de: "Schlammbad"
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

	description: {
		fr: "Il vit à un mètre sous la terre et se nourrit de racines. Il apparaît rarement à la surface."
	},

	thirdParty: {
		cardmarket: 273742,
		tcgplayer: 42390
	}
}

export default card
