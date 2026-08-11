import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Quagsire",
		'fr-fr': "Maraiste",
		'es-es': "Quagsire",
		'it-it': "Quagsire",
		'pt-br': "Quagsire",
		'de-de': "Morlord"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		195,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revólver d’Água",
				'de-de': "Aquaknarre"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'es-es': "Surf",
				'it-it': "Surf",
				'pt-br': "Surfar",
				'de-de': "Surfer"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has a sluggish nature. It lies at the river's bottom, waiting for prey to stray into its mouth.",
	},

	thirdParty: {
		cardmarket: 372388,
		tcgplayer: 189196
	}
}

export default card
