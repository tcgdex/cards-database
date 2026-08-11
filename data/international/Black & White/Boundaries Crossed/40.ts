import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Dewott",
		'fr-fr': "Mateloutre",
		'es-es': "Dewott",
		'it-it': "Dewott",
		'pt-br': "Dewott",
		'de-de': "Zwottronin"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		502,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Oshawott",
		'fr-fr': "Moustillon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie Éclaboussante",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Strict training is how it learns its flowing double-scalchop technique.",
	},

	thirdParty: {
		cardmarket: 280627,
		tcgplayer: 84795
	}
}

export default card
