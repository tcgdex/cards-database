import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		de: "Karpador"
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
				en: "Surprise Attack",
				fr: "Attaque surprise",
				de: "Überraschungsangriff"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ascension",
				fr: "Ascension",
				de: "Aufstieg"
			},
			effect: {
				en: "Search your deck for a card that evolves from Magikarp and put it on Magikarp. (This counts as evolving Magikarp.) Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte qui évolue de Magicarpe et placez-la sur Magicarpe. (Vous faites ainsi évoluer Magicarpe.) Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer Evolutionskarte auf der \"Entsteht aus Karpador\" steht und lege sie auf Karpador (das zählt als Entwickeln von Karpador). Mische dein Deck danach."
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

	thirdParty: {
		cardmarket: 276243,
		tcgplayer: 87026
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		},
		{
			type: "normal",
			subtype: "rarity-error"
		},
		{
			type: "holo",
			foil: "energy",
			subtype: "rarity-error"
		},
	]
}

export default card
