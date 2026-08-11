import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Blaine's Magmar"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [126],

	hp: 60,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Magby"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Firebreathing"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Lava Burst"
			},
			effect: {
				'en-us': "Discard the top 5 cards of your deck. (If there are fewer than 5 cards in your deck, discard all of them.) This attack does 20 damage for each Fire Energy card you discarded in this way."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83873,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83873,
				cardmarket: 274173
			}
		}
	],
}

export default card

