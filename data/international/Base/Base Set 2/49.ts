import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Machoke",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machop",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Karate Chop",
			},
			effect: {
				'en-us': "Does 50 damage minus 10 for each damage counter on Machoke.",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Submission",
			},
			effect: {
				'en-us': "Machoke does 20 damage to itself.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Its muscular body is so powerful that it must wear a power-save belt to help regulate its motions.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273972,
				tcgplayer: 42512
			}
		}
	]
}

export default card
