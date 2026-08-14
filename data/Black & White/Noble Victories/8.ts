import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Karrablast",
		fr: "Carabing",
		es: "Karrablast",
		it: "Karrablast",
		pt: "Karrablast",
		de: "Laukaps"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		588,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mysterious Evolution",
				fr: "Évolution Mystérieuse",
				de: "Mysteriöse Entwicklung"
			},
			effect: {
				en: "If Shelmet is in play, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
				fr: "Si Escargaume est en jeu, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
				de: "Wenn Schnuthelm im Spiel ist, durchsuche dein Deck nach einer Karte, zu der sich dieses Pokémon entwickelt, und lege sie auf dieses Pokémon (dies zählt als Entwicklung dieses Pokémon). Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
				de: "Furienschlag"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "When they feel threatened, they spit acidic liquid to drive attackers away. This Pokémon targets Shelmet.",
		de: "Fühlt es sich bedroht, wehrt es sich, indem es ätzende Flüssigkeit speit. Hat es auf Schnuthelm abgesehen."
	},

	thirdParty: {
		cardmarket: 280131,
		tcgplayer: 86425
	}
}

export default card
