import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Remoraid",
		'de-de': "Remoraid"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		223,
	],

	hp: 50,

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
				'en-us': "Energy Draw",
				'de-de': "Energy Draw"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a basic Energy card and attach it to Remoraid. Shuffle your deck afterward.",
				'de-de': "Flip a coin. If heads, search your deck for a basic Energy card and attach it to Remoraid. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Razor Fin",
				'de-de': "Razor Fin"
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


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276365,
				tcgplayer: 88695
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276365,
				tcgplayer: 88695
			},
		},
	],

}

export default card

