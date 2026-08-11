import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'de-de': "Shuppet"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		353,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ascension",
				'fr-fr': "Ascension",
				'de-de': "Aufstieg"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from Shuppet and put it onto Shuppet. (This counts as evolving Shuppet.) Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte évoluant de Polichombr et placez-la sur Polichombr (vous le faites ainsi évoluer). Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus Shuppet entwickelt, und lege sie auf Shuppet. (Das zählt als Entwickeln von Shuppet.) Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277121,
		tcgplayer: 89198
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		}
	]
}

export default card
