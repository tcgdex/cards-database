import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Haunter",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gastly",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hypnosis",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Dream Eater",
			},
			effect: {
				'en-us': "You can't this attack unless the Defending Pokémon is Asleep.",
			},

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Because of its ability to slip through block walls, it is said to be from another dimension.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273966,
				tcgplayer: 42506
			}
		}
	]
}

export default card
