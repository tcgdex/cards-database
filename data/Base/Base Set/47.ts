import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
		de: "Digda",
		it: "Diglett"
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
				de: "Schaufler",
				it: "Fossa"
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
				de: "Schlammbad",
				it: "Fangosberla"
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
		fr: "Il vit à un mètre sous la terre et se nourrit de racines. Il apparaît rarement à la surface.",
		it: "Vive sotto terra, dove sopravvive mangiando le radici di varie piante. Ogni tanto risale in superficie. LIV 8 N.50"
	},

	thirdParty: {
		cardmarket: 273742,
		tcgplayer: 42390
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
