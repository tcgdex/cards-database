import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Wigglytuff",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Jigglypuff",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lullaby",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Do the Wave",
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each of your Benched Pokémon.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 273942,
				tcgplayer: 42463
			}
		}
	]
}

export default card
