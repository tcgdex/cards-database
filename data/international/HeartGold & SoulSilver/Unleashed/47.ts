import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
		'de-de': "Kikugi"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [420],

	hp: 50,

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
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It evolves by sucking the energy out of the small ball where it had been storing nutrients."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84264,
				cardmarket: 279203
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84264,
				cardmarket: 279203
			}
		},
	],

}

export default card
