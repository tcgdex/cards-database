import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
		'de-de': "Kindwurm"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [371],

	hp: 40,

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
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Enflammer",
				'de-de': "Flackern"
			},

			damage: 20,

		},
	],


	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83692,
				cardmarket: 275926
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83692,
				cardmarket: 275926
			},
		},
	],

}

export default card
