import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon"
	},

	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		152,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Mini Drain",
				'fr-fr': "Mini-Assèchement"
			},
			effect: {
				'en-us': "Heal 10 damage from this Pokémon.",
				'fr-fr': "Soignez 10 dégâts à ce Pokémon."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It uses the leaf on its head to determine the temperature and humidity. It loves to sunbathe."
	},

	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538788,
				tcgplayer: 232317
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538793,
				tcgplayer: 232317
			}
		}
	]
}

export default card

