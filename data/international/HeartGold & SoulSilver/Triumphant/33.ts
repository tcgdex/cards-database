import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Elektek",
		'de-de': "Elektek"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [125],

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Light Punch",
				'fr-fr': "Poing léger",
				'de-de': "Leichter Hieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Shock Bolt",
				'fr-fr': "Choc’éclair",
				'de-de': "Schock-Blitz"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard all Lightning Energy attached to Electabuzz.",
				'fr-fr': "Lancez une pièce. Si c’est pile, défaussez toutes les cartes Énergie Lightning attachées à Elektek.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" lege alle an Elektek angelegten -Energien auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its body constantly discharges electricity. Getting close to it will make your hair stand on end."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85117,
				cardmarket: 279563
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279563,
				tcgplayer: 85117
			}
		},
	],

}

export default card
