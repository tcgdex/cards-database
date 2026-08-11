import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'de-de': "Schneckmag"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		218,
	],

	hp: 50,

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
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Collect"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Draw a card."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'de-de': "Combustion"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89342,
				cardmarket: 276477
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89342,
				cardmarket: 276477
			},
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"],
			thirdParty: {
				tcgplayer: 477585,
				cardmarket: 871529
			},
		},
	],

}

export default card
