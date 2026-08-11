import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
		'de-de': "Nockchan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [107],

	hp: 70,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Jab",
				'fr-fr': "Taquet",
				'de-de': "Jab"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Special Punch",
				'fr-fr': "Punch spécial",
				'de-de': "Special Punch"
			},

			damage: 40,

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
		'en-us': "The spirit of a pro boxer has infused this POKéMON. It throws punches that are faster than a bullet train."
	},

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 86094,
				cardmarket: 278550
			}
		}
	]
}

export default card
