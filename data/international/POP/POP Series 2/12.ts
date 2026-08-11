import { Card } from 'models/database/card'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [1],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84031,
				cardmarket: 277443
			},
		},
	],

}

export default card
