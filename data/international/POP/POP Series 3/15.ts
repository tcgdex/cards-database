import { Card } from 'models/database/card'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		'en-us': "Marshtomp",
		'fr-fr': "Flobio"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [259],

	hp: 70,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Mudkip",
		'fr-fr': "Gobou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Mud Slap",
				'fr-fr': "Coud'boue"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'fr-fr': "Damoclès"
			},
			effect: {
				'en-us': "Marshtomp does 10 damage to itself.",
				'fr-fr': "Flobio s'inflige 10 dégâts."
			},
			damage: 40,

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
				tcgplayer: 87236,
				cardmarket: 277463
			},
		},
	],

}

export default card
