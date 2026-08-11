import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Poliwhirl",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		61,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwag",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Amnesia",
			},
			effect: {
				'en-us': "Choose 1 of defenders attacks. Defender cannot use that attack next turn.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Doubleslap",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times number of heads.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Capable of living in or out of water. When out of water, it sweats to keep its body slimy.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273980,
				tcgplayer: 42520
			}
		}
	]
}

export default card
