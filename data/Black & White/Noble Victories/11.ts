import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Shelmet",
		fr: "Escargaume",
		es: "Shelmet",
		it: "Shelmet",
		pt: "Shelmet",
		de: "Schnuthelm"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		616,
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
				en: "If Karrablast is in play, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
				fr: "Si Carabing est en jeu, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
				de: "Wenn Laukaps im Spiel ist, durchsuche dein Deck nach einer Karte, zu der sich dieses Pokémon entwickelt, und lege sie auf dieses Pokémon (dies zählt als Entwicklung dieses Pokémon). Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ramme"
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

	retreat: 3,

	description: {
		en: "It evolves when bathed in an electric-like energy along with Karrablast. The reason is still unknown.",
		de: "Führt man ihm mit Laukaps elektrische Energie zu, entwickelt es sich. Niemand kennt den Grund dafür."
	},

	thirdParty: {
		cardmarket: 280134,
		tcgplayer: 89146
	}
}

export default card
