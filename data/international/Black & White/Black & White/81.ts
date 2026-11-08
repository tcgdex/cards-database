import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Lillipup",
		'fr-fr': "Ponchiot",
		'es-es': "Lillipup",
		'it-it': "Lillipup",
		'pt-br': "Lillipup",
		'de-de': "Yorkleff"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		506,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
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
		'en-us': "The long hair around its face provides an amazing radar that lets it sense subtle changes in its surroundings.",
	},

	thirdParty: {
		cardmarket: 279818,
		tcgplayer: 86798
	}
}

export default card
