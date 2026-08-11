import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
		'de-de': "Stollunior"
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
				'en-us': "Mud Slap",
				'fr-fr': "Coud'boue",
				'de-de': "Lehmschelle"
			},

			damage: 10,
			cost: ["Colorless"]
		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe acier",
				'de-de': "Metallklaue"
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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277028,
		tcgplayer: 83633
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
