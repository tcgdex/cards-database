import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Sabrina's Slowbro"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [80],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Slowpoke"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Naptime"
			},
			effect: {
				'en-us': "Flip a coin. If heads, remove 3 damage counters from Sabrina's Slowbro and Sabrina's Slowbro is now Asleep. If Sabrina's Slowbro has fewer damage counters than that, remove all of them."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Screaming Headbutt"
			},
			effect: {
				'en-us': "You can't use this attack during your next turn."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88888,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88888,
				cardmarket: 274196
			}
		}
	],
}

export default card

