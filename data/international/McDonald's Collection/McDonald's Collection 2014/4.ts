import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2014'

const card: Card = {
	dexId: [
		656,
	],
	set: Set,
	illustrator: '5ban Graphics',
	description: {
		'en-us': "It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked."
	},
	name: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
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
				'en-us': "Pound",
				'fr-fr': "Écras'Face",
			},
			damage: "10",
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Drip",
				'fr-fr': "Goutte à Goutte",
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [

	],
	retreat: 1,
	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281656,
				tcgplayer: 110409
			}
		}
	]
}

export default card

