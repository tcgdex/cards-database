import { Card } from 'models/database/card'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		'en-us': "Brock's Graveler"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [75],

	hp: 70,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Geodude"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Detonate"
			},
			effect: {
				'en-us': "Does 10 damage to each Pokémon on each player's bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Brock's Graveler does 50 damage to itself. If there is a Stadium card in play, discard it."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83968,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83968,
				cardmarket: 274302
			}
		},
	],
}

export default card
