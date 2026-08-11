import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Kangaskhan",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		115,
	],

	hp: 90,

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
				'en-us': "Fetch",
			},
			effect: {
				'en-us': "Draw a card.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Comet Punch",
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		'en-us': "The infant rarely ventures out of its mother's protective pouch until it is three years old.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273949,
				tcgplayer: 42498
			}
		}
	]
}

export default card
