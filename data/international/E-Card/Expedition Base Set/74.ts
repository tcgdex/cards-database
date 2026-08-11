import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil",
		'de-de': "Tyracroc"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [159],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Croconaw does 10 damage to itself.",
				'fr-fr': "Crocrodil s'inflige 10 dégâts.",
				'de-de': "Tyracroc fügt sich selber 10 Schadenspunkte zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84497,
				cardmarket: 274949
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84497,
				cardmarket: 274949
			},
		},
	],
}

export default card
