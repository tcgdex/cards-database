import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss"
	},

	illustrator: "OOYAMA",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		387,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'Herbe"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty."
	},

	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538808,
				tcgplayer: 232319
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538813,
				tcgplayer: 232319
			}
		}
	]
}

export default card

