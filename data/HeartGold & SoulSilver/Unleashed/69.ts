import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Weedle",
		fr: "Aspicot",
		de: "Hornliu"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		13,
	],

	hp: 40,

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
				en: "Speed Evolution",
				fr: "Évolution rapide",
				de: "Tempo-Evolution"
			},
			effect: {
				en: "Search your deck for a card that evolves from Weedle and put it onto Weedle. (This counts as evolving Weedle.) Shuffle your deck afterward.",
				fr: "Cherchez une carte Évolution d’Aspicot dans votre deck et placez-la sur Aspicot (cela équivaut à faire évoluer Aspicot). Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach einer Karte, die aus Hornliu entsteht, und lege sie auf Hornliu. (Dies zählt als Entwickeln von Hornliu.) Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sting",
				fr: "Dard",
				de: "Stachel"
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
		en: "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279225
	}
}

export default card
