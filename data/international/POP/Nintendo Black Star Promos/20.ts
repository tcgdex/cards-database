import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Ludicolo",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		272,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		'en-us': "Lombre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Rain Dish",
			},
			effect: {
				'en-us': "At any time between turns, remove 1 damage counter from Ludicolo.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 86896
			}
		}
	]

}

export default card
