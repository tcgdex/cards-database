import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'fr-fr': "Evoli",
		'de-de': "Evoli"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [133],

	hp: 50,

	types: [
		"Colorless"
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
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has the ability to alter the composition of its body to suit its surrounding environment."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279300,
				tcgplayer: 85087
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279300,
				tcgplayer: 85087
			}
		}
	],

}

export default card
