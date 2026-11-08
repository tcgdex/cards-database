import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	dexId: [810],
	name: {
		'en-us': "Grookey",
		'fr-fr': "Ouistempo",
	},

	illustrator: "kirisAki",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Branch Poke",
				'fr-fr': "Tapotige",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area."
	},

	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538848,
				tcgplayer: 232323
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538853,
				tcgplayer: 232323
			}
		}
	]
}

export default card

