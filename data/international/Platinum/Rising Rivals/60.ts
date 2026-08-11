import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Flareon E4",
		'fr-fr': "Pyroli  Niv. 55",
		'de-de': "Flamara 4"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [136],
	hp: 70,
	types: [
		"Fire"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Tail Slap",
				'fr-fr': "Coup de queue enflammé",
				'de-de': "Feuerschweifschlag"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy attached to Flareon .",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Pyroli .",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" entferne 1 -Energie, die an Flamara 4 angelegt ist, und lege sie auf deinen Ablagestapel."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278634,
				tcgplayer: 85504
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278634,
				tcgplayer: 85504
			}
		},
		{
			type: "reverse",
			foil: 'cracked-ice',
			thirdParty: {
				tcgplayer: 272511
			}
		},
	],

}

export default card
