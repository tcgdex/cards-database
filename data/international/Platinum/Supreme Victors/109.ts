import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik",
		'de-de': "Zirpurze"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [401],

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
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'de-de': "Verprügler"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Its legs are short. Whenever it stumbles, its stiff antennae clack with a xylophone-like sound."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86529,
				cardmarket: 278800
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278800,
				tcgplayer: 86529
			}
		},
	],

}

export default card
