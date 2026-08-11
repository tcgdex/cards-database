import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur",
		'de-de': "Flurmel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		293,
	],

	hp: 50,

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
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Rollout"
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

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 90581,
		cardmarket: 276584
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90581,
				cardmarket: 276584
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90581,
				cardmarket: 276584
			},
		},
		{
			type: "normal",
			stamp: ["city-championships"],
			thirdParty: {
				tcgplayer: 232877,
				cardmarket: 450533
			},
		}
	],
}

export default card
