import { Card } from 'models/database/card'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		'en-us': "Koga's Tangela"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [114],

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
				'en-us': "Sleep Powder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Grasping Vine"
			},
			effect: {
				'en-us': "Flip a coin. If heads, draw 2 cards."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86518,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86518,
				cardmarket: 274349
			}
		},
	],
}

export default card
