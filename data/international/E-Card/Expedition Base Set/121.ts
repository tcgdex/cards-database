import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'de-de': "Mauzi"
	},

	illustrator: 'Hironobu Yoshida',
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [52],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Scratch",
				'fr-fr': "Double griffe",
				'de-de': "Double Scratch"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pay Day",
				'fr-fr': "Jackpot",
				'de-de': "Pay Day"
			},
			effect: {
				'en-us': "Flip a coin. If heads, draw a card.",
				'fr-fr': "Lancez une pièce. Si c'est face, piochez une carte.",
				'de-de': "Flip a coin. If heads, draw a card."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87315,
				cardmarket: 274996
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87315,
				cardmarket: 274996
			},
		},
	],
}

export default card
