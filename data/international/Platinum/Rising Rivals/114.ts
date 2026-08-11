import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Surfing Pikachu",
		'fr-fr': "Pikachu surfeur Niv. 13",
		'de-de': "Surfendes Pikachu"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'de-de': "Surfer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,

	description: {
		'en-us': "One summer, a group of Pikachu was found riding the waves at the local beach."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278688,
				tcgplayer: 89644
			}
		},
	],

}

export default card
