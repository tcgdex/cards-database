import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'de-de': "Karpador"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Surprise Attack",
				'fr-fr': "Attaque surprise",
				'de-de': "Überraschungsangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ascension",
				'fr-fr': "Ascension",
				'de-de': "Aufstieg"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from Magikarp and put it on Magikarp. (This counts as evolving Magikarp.) Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte qui évolue de Magicarpe et placez-la sur Magicarpe. (Vous faites ainsi évoluer Magicarpe.) Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Evolutionskarte auf der \"Entsteht aus Karpador\" steht und lege sie auf Karpador (das zählt als Entwickeln von Karpador). Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276243,
				tcgplayer: 87026
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276243,
				tcgplayer: 87026
			},
		},
		{
			type: "normal",
			subtype: "rarity-error",
			thirdParty: {
				cardmarket: 276243,
				tcgplayer: 87026
			},
		},
		{
			type: "reverse",
			foil: "energy",
			subtype: "rarity-error",
			thirdParty: {
				cardmarket: 276243,
				tcgplayer: 87026
			},
		},
	],
}

export default card
