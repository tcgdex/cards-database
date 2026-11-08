import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'de-de': "Porygon"
	},

	illustrator: "Tomoaki Imakuni",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		137,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Data Retrieval",
				'fr-fr': "Récupération d'informations",
				'de-de': "Data Retrieval"
			},
			effect: {
				'en-us': "If you have less than 4 cards in your hand, draw cards until you have 4 cards in your hand.",
				'fr-fr': "Si vous avez moins de 4 cartes dans votre main, piochez des cartes jusqu'à ce que vous ayez 4 cartes en main.",
				'de-de': "If you have less than 4 cards in your hand, draw cards until you have 4 cards in your hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Confuse Ray"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "The Defending Pokémon is now Confused."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276223,
				tcgplayer: 88308
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276223,
				tcgplayer: 88308
			},
		},
	],
}

export default card
