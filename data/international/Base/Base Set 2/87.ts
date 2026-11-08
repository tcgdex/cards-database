import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Pikachu",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Jolt",
			},
			effect: {
				'en-us': "Flip a coin. If tails, Pikachu does 10 damage to itself.",
			},
			damage: 30,

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
		'en-us': "When several of these Pokémon gather, their electricity can cause lightning storms.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274010,
				tcgplayer: 42538
			}
		}
	]
}

export default card
