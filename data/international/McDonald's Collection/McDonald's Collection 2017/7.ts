import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		739,
	],
	set: Set,
	name: {
		'en-us': "Crabrawler",
		'fr-fr': "Crabagarre",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Punch",
				'fr-fr': "Koud'Poing",
			},
			damage: "20",
		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-Masse",
			},
			damage: "40",
		},
	],

	illustrator: "Shin Nagasawa",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301849,
				tcgplayer: 152687
			}
		}
	]
}

export default card

