import { Card } from 'models/database/card'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		'en-us': "Giovanni's Nidoran ♀"
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [29],
	hp: 50,
	types: [
		"Grass"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Horn Thrust"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge"
			},
			effect: {
				'en-us': "Giovanni's Nidoran ♀ does 20 damage to itself."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85720,
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85720
			}
		},
	],
}

export default card
