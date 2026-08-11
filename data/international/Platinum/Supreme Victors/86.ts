import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Togekiss C",
		'fr-fr': "Togekiss ",
		'de-de': "Togekiss C"
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [468],
	hp: 70,
	types: [
		"Colorless"
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque imprudente",
				'de-de': "Waghalsiger Sturmangriff"
			},
			effect: {
				'en-us': "Togekiss C does 10 damage to itself.",
				'fr-fr': "Togekiss  s'inflige 10 dégâts.",
				'de-de': "Togekiss C fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278777,
				tcgplayer: 89926
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278777,
				tcgplayer: 89926
			}
		},
	],

}

export default card
