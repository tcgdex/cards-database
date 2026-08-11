import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Charmander",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Charmander in order to use this attack.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Obviously prefers hot places. If it gets caught in the rain, steam is said to spout from the tip of its tail.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273992,
				tcgplayer: 42488
			}
		}
	]
}

export default card
