import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik",
		'de-de': "Zirpurze"
	},

	illustrator: "Tomokazu Komiya",
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
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'de-de': "Verprügler"
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
		'en-us': "When its antennae hit each other, it sounds like the music of a xylophone."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86530,
				cardmarket: 279595
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279595,
				tcgplayer: 86530
			}
		},
	],

}

export default card
