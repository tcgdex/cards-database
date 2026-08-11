import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
		'de-de': "Nockchan",
		'it-it': "Hitmonchan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Jab",
				'fr-fr': "Taquet",
				'de-de': "Boxschlag",
				'it-it': "Stoccata"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Special Punch",
				'fr-fr': "Punch Spécial",
				'de-de': "Spezialschlag",
				'it-it': "Pugno speciale"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "While seeming to do nothing, it fires punches in lightning-fast volleys that are impossible to see.",
		'fr-fr': "Il distribue des séries de coups de poing rapides comme l'éclair, invisibles à l'œil nu.",
		'it-it': "Anche se sembra inerme, tira fulminee scariche di pugni, impossibili da vedere. LIV 33 N.107"
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273702,
				tcgplayer: 42415
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107002
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107002
			}
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	]
}

export default card
