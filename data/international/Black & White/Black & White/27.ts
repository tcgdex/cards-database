import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Oshawott",
		'fr-fr': "Moustillon",
		'es-es': "Oshawott",
		'it-it': "Oshawott",
		'pt-br': "Oshawott",
		'de-de': "Ottaro"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		501,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The scalchop on its stomach is made from the same elements as claws. It detaches the scalchop for use as a blade.",
	},

	thirdParty: {
		cardmarket: 279765,
		tcgplayer: 87890
	}
}

export default card
