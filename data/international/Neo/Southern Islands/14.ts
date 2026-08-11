import { Card } from 'models/database/card'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		'en-us': "Slowking",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Revelation",
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psychic",
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Its nonchalant reaction to everything somehow gives this Pokémon an imposing presence.",
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275644,
				tcgplayer: 46471
			}
		}
	]
}

export default card
