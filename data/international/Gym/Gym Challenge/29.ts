import { Card } from 'models/database/card'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		'en-us': "Sabrina's Gengar"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [94],

	hp: 90,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Haunter"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Dark Wave"
			},
			effect: {
				'en-us': "All Pokémon Powers stop working until the end of your opponent's next turn."
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
				'en-us': "Shadow Bind"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn."
			},
			damage: 40,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88875,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88875,
				cardmarket: 274297
			}
		},
	],
}

export default card
