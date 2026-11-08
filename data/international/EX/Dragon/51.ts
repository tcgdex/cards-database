import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Barboach",
		'fr-fr': "Barloche",
		'de-de': "Schmerbe"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [339],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Splash",
				'fr-fr': "Trempette",
				'de-de': "Platscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Mud Slap",
				'fr-fr': "Coud'boue",
				'de-de': "Lehmschelle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83726,
				cardmarket: 275928
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83726,
				cardmarket: 275928
			},
		},
	],

}

export default card
