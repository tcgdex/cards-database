import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Nidoran♂",
		fr: "Nidoran ♂",
		de: "Nidoran M"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		32,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	

	retreat: 1,


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for a Nidoran ♀ or a Nidoran ♂ card and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Nidoran ♀ ou une carte Nidoran ♂ et placez-la sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer Nidoran W oder Nidoran M Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Stab",
				fr: "Coup double",
				de: "Doppelstich"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
