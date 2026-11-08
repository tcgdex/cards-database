import { Card } from 'models/database/card'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		'en-us': "Misty's Golduck"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [55],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Psyduck"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Electro Beam"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard all Energy cards attached to Misty's Golduck."
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Super Removal"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 Energy card attached to each of your opponent's Pokémon that has any Energy cards and discard those Energy cards."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87530,
			},
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87530,
				cardmarket: 274280
			}
		},
	],
}

export default card
