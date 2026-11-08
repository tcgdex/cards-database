import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		258,
	],
	set: Set,
	name: {
		'en-us': "Mudkip",
		'fr-fr': "Gobou",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
			},
			damage: "10",
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Mud-Slap",
				'fr-fr': "Coud'Boue",
			},
			damage: "20",
		},
	],

	illustrator: "Aya Kusube",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 293321,
				tcgplayer: 110427
			}
		}
	]
}

export default card

