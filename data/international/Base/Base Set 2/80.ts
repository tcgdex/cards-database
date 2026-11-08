import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Meowth",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
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
				"Colorless",
			],
			name: {
				'en-us': "Pay Day",
			},
			effect: {
				'en-us': "Flip a coin. If heads, draw a card.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274003,
				tcgplayer: 42532
			}
		}
	]
}

export default card
