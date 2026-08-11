import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'pt-br': "Meowth",
		'de-de': "Mauzi"
	},

	illustrator: "Kouki Saitou",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 60,

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
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-Griffe",
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pay Day",
				'fr-fr': "Jackpot",
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
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

	description: {
		'en-us': "This is an extremely rare Meowth card. Maybe good fortune will come to you if you hold this card!",
	},

	thirdParty: {
		cardmarket: 280225,
		tcgplayer: 87325
	}
}

export default card
