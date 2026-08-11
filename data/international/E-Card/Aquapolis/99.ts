import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Paras",
		'fr-fr': "Paras",
		'de-de': "Paras"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [46],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spore",
				'fr-fr': "Spore",
				'de-de': "Pilzspore"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Spore Evolution",
				'fr-fr': "Évolution spore",
				'de-de': "Sporenentwicklung"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from Paras. Attach it to Paras. This counts as evolving Paras. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Évolution de Paras. Attachez-la à Paras. Cela revient à le faire évoluer. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Karte, die aus Paras entsteht. Lege sie an Paras an. Dies zählt als Entwickeln von Paras. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87949,
				cardmarket: 275174
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87949,
				cardmarket: 275174
			}
		},
	]
}

export default card
