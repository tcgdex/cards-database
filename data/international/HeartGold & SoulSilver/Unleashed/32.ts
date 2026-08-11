import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'de-de': "Kokuna"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [14],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Speed Evolution",
				'fr-fr': "Évolution rapide",
				'de-de': "Tempo-Evolution"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from Kakuna and put it onto Kakuna. (This counts as evolving Kakuna.) Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Évolution de Coconfort et placez-la sur Coconfort (cela équivaut à faire évoluer Coconfort). Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Karte, die aus Kokuna entsteht, und lege sie auf Kokuna. (Dies zählt als Entwickeln von Kokuna.) Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Dard-venin",
				'de-de': "Giftstachel"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
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
		'en-us': "Although it is a cocoon, it can move a little. It can extend its poison barb if it is attacked."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86415,
				cardmarket: 279188
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86415,
				cardmarket: 279188
			}
		},
	],

}

export default card
