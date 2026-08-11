import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		789,
	],
	set: Set,
	name: {
		'en-us': "Cosmog",
		'fr-fr': "Cosmog",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Psychic",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dust Gathering",
				'fr-fr': "Ramasse Poussière",
			},
			effect: {
				'en-us': "Draw a card",
				'fr-fr': "Piochez une carte.",
			},
		},
	],

	illustrator: "Megumi Mizutani",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301848,
				tcgplayer: 152686
			}
		}
	]
}

export default card

