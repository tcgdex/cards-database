import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'de-de': "Waaty"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [180],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Energy Recall",
				'fr-fr': "Rappel d'énergie",
				'de-de': "Energierückgewinnung"
			},
			effect: {
				'en-us': "Attach up to 2 basic Energy cards from your discard pile to Flaaffy.",
				'fr-fr': "Attachez à Lainergie jusqu'à deux cartes Énergie de base de votre pile de défausse.",
				'de-de': "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel an Waaty an."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Ball",
				'fr-fr': "Boule éclair",
				'de-de': "Kugelblitz"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85476,
				cardmarket: 275904
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85476,
				cardmarket: 275904
			},
		},
	],

}

export default card
