import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		728,
	],
	set: Set,
	name: {
		'en-us': "Popplio",
		'fr-fr': "Otaquin",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
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
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
			},
			damage: "20",
		},
	],

	illustrator: "Kouki Saitou",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301846,
				tcgplayer: 152684
			}
		}
	]
}

export default card

