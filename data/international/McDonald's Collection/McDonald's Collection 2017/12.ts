import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		734,
	],
	set: Set,
	name: {
		'en-us': "Yungoos",
		'fr-fr': "Manglouton",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Colorless",
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
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
			},
			damage: "20",
		},
	],

	illustrator: "match",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301854,
				tcgplayer: 152693
			}
		}
	]
}

export default card

