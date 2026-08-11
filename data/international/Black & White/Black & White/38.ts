import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Alomomola",
		'fr-fr': "Mamanbo",
		'es-es': "Alomomola",
		'it-it': "Alomomola",
		'pt-br': "Alomomola",
		'de-de': "Mamolida"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		594,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'Face",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse Vague",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Floating in the open sea is how they live. When they find a wounded Pokémon, they embrace it and bring it to shore.",
	},

	thirdParty: {
		cardmarket: 279776,
		tcgplayer: 83505
	}
}

export default card
