import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Meowth",
		fr: "Miaouss",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
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
				en: "Fury Swipes",
				fr: "Combo-Griffe",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pay Day",
				fr: "Jackpot",
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
