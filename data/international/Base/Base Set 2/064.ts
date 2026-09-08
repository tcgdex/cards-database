import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Weepinbell",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		70,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bellsprout",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poisonpowder",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It spits out poisonpowder to immobilize the enemy, and then finishes the enemy with a spray of acid.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273987,
				tcgplayer: 42527
			}
		}
	]
}

export default card
