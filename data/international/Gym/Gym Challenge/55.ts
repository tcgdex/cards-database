import { Card } from 'models/database/card'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		'en-us': "Sabrina's Haunter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [93],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Gastly"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Nightmare"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Shadow Attack"
			},
			effect: {
				'en-us': "Flip a coin. If heads, and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 30 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88877,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88877,
				cardmarket: 274323
			}
		},
	],
	retreat: 0
}

export default card
