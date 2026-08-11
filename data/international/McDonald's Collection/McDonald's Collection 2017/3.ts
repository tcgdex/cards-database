import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		725,
	],
	set: Set,
	name: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fire",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
			},
			damage: "10",
		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Flamboiement",
			},
			damage: "20",
		},
	],

	illustrator: "Akira Komayama",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301845,
				tcgplayer: 152683
			}
		}
	]
}

export default card

