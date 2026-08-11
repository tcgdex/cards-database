import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
		'de-de': "Digda",
		'it-it': "Diglett"
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
				'en-us': "Dig",
				'fr-fr': "Tunnel",
				'de-de': "Schaufler",
				'it-it': "Fossa"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Mud Slap",
				'fr-fr': "Jet de boue",
				'de-de': "Schlammbad",
				'it-it': "Fangosberla"
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
		'en-us': "Lives about three feet underground, where it feeds on plant roots. It sometimes appears above ground.",
		'fr-fr': "Il vit à un mètre sous la terre et se nourrit de racines. Il apparaît rarement à la surface.",
		'it-it': "Vive sotto terra, dove sopravvive mangiando le radici di varie piante. Ogni tanto risale in superficie. LIV 8 N.50"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273742,
				tcgplayer: 42390
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107044
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107044
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
