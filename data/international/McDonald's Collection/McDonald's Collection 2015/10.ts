import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		183,
	],
	set: Set,
	name: {
		'en-us': "Marill",
		'fr-fr': "Marill",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fairy",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
			},
			damage: "10",
		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
			},
			damage: "20",
		},
	],

	illustrator: "Shigenori Negishi",
	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 293326,
				tcgplayer: 110430
			}
		}
	]
}

export default card

