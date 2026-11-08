import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Magikarp",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Flail",
			},
			effect: {
				'en-us': "Does 10 damage times number of damage counters on Magikarp.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "In the distant past, it was stronger than its horribly weak descendants that exist today.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273973,
				tcgplayer: 42513
			}
		}
	]
}

export default card
