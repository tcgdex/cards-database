import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort",
		de: "Kokuna"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		14,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},

	stage: "Stage1",

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
				en: "Search your deck for a card that evolves from Kakuna and put it onto Kakuna. (This counts as evolving Kakuna.) Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Évolution de Coconfort et placez-la sur Coconfort (cela équivaut à faire évoluer Coconfort). Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach einer Karte, die aus Kokuna entsteht, und lege sie auf Kokuna. (Dies zählt als Entwickeln von Kokuna.) Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-venin",
				de: "Giftstachel"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Although it is a cocoon, it can move a little. It can extend its poison barb if it is attacked."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279188,
		tcgplayer: 86415
	}
}

export default card
