import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
		'de-de': "Makuhita"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [296],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slap Push",
				'fr-fr': "Gifle",
				'de-de': "Stoß"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lunge Out",
				'fr-fr': "Allonger",
				'de-de': "Sprungangriff"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275704,
				tcgplayer: 87125
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275704,
				tcgplayer: 87125
			}
		},
	],

}

export default card
