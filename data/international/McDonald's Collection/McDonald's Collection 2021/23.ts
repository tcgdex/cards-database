import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		'en-us': "Popplio",
		'fr-fr': "Otaquin",
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		728,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras’Face",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon snorts body fluids from its nose, blowing balloons to smash into its foes. It’s famous for being a hard worker."
	},
	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538998,
				tcgplayer: 232337
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 539003,
				tcgplayer: 232337
			}
		}
	]
}

export default card

