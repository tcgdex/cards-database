import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Magmar",
		'de-de': "Magmar"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 70,

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
				'en-us': "Dump and Draw",
				'de-de': "Dump and Draw"
			},
			effect: {
				'en-us': "Discard up to 2 Energy cards from your hand. Then, draw 2 cards for each Energy card you discarded.",
				'de-de': "Discard up to 2 Energy cards from your hand. Then, draw 2 cards for each Energy card you discarded."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flame Tail",
				'de-de': "Flame Tail"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276336,
				tcgplayer: 87045
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276336,
				tcgplayer: 87045
			},
		},
	],

}

export default card

