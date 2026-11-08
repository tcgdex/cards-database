import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Brock's Mankey"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [56],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fidget"
			},
			effect: {
				'en-us': "Shuffle your deck."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Karate Chop"
			},
			effect: {
				'en-us': "Does 40 damage minus 10 damage for each damage counter on Brock's Mankey."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83972,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83972,
				cardmarket: 274151
			}
		}
	],
	retreat: 0
}

export default card

