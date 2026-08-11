import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Sabrina's Jynx"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [124],

	hp: 60,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Smoochum"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Good Night"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Good Morning"
			},
			effect: {
				'en-us': "If the Defending Pokémon was Asleep, it is no longer Asleep."
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
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88881,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88881,
				cardmarket: 274195
			}
		}
	],
}

export default card

