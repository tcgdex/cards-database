import { Card } from 'models/database/card'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		'en-us': "Venusaur"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [3],

	hp: 140,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Ivysaur"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giga Drain"
			},
			effect: {
				'en-us': "Remove from Venusaur the number of damage counters equal to the damage you did to the Defending Pokémon."
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
	retreat: 4,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278842,
				tcgplayer: 90320
			}
		}
	]
}

export default card
