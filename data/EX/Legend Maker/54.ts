import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Ascension",
				fr: "Ascension",
				de: "Aufstieg"
			},
			effect: {
				en: "Search your deck for a card that evolves from Grimer and put it onto Grimer. (This counts as evolving Grimer.) Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte qui évolue de Tadmorv et placez-la sur Tadmorv. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach 1 Karte, die sich aus Sleima entwickelt, und lege sie auf Sleima. (Das zählt als Entwickeln von Sleima.) Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Toss",
				fr: "Décision vaseuse",
				de: "Schleimwurf"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276931,
		tcgplayer: 85910
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
