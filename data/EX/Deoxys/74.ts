import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Slugma",
		fr: "Limagma",
		de: "Schneckmag"
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
				en: "Collect",
				fr: "Collectionner",
				de: "Collect"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				de: "Draw a card."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				de: "Combustion"
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
