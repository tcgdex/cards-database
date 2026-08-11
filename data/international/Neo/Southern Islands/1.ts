import { Card } from 'models/database/card'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		'en-us': "Mew",
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Rainbow Wave",
			},
			effect: {
				'en-us': "Choose a type of Energy other than Colorless attached to Mew. This attack does 20 damage to each of your opponent's Pokémon of that type (including Benched Pokémon). Don't apply Weakness and Resistance.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		'en-us': "This Pokémon's body is covered by fine hairs that can be seen only under a microscope.",
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275631,
				tcgplayer: 46466
			}
		}
	]
}

export default card
