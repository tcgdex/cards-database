import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Pansear",
		'fr-fr': "Flamajou",
		'es-es': "Pansear",
		'it-it': "Pansear",
		'pt-br': "Pansear",
		'de-de': "Grillmak"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		513,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Live Coal",
				'fr-fr': "Charbon Mutant",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it is angered, the temperature of its head tuft reaches 600° F. It uses its tuft to roast berries.",
	},

	thirdParty: {
		cardmarket: 279759,
		tcgplayer: 87940
	}
}

export default card
