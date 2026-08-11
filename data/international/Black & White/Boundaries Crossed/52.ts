import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode",
		'es-es': "Electrode",
		'it-it': "Electrode",
		'pt-br': "Electrode",
		'de-de': "Lektrobal"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Static Shock",
				'fr-fr': "Choc Statique",
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It is known to drift on winds if it is bloated to bursting with stored electricity.",
	},

	thirdParty: {
		cardmarket: 280639,
		tcgplayer: 85161
	}
}

export default card
