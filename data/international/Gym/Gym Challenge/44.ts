import { Card } from 'models/database/card'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		'en-us': "Giovanni's Nidorina"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [30],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Nidoran♀"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Poison Sting Tackle"
			},
			effect: {
				'en-us': "Giovanni's Nidorina does 20 damage to itself. Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

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
				tcgplayer: 85722,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85722,
				cardmarket: 274312
			}
		},
	],
}

export default card
