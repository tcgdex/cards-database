import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Suicune ☆",
		'fr-fr': "Suicune ☆",
		'de-de': "Suicune ☆"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		245,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Splashing Turn",
				'fr-fr': "Tour éclaboussant",
				'de-de': "Splashing Turn"
			},
			effect: {
				'en-us': "Switch Suicune ☆ with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Suicune ☆ avec 1 de vos Pokémon de Banc.",
				'de-de': "Switch Suicune ☆ with 1 of your Benched Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Cross Wind",
				'fr-fr': "Vent croisé",
				'de-de': "Cross Wind"
			},
			effect: {
				'en-us': "If you have less Prize cards left than your opponent, discard all Energy cards attached to all of your Pokémon.",
				'fr-fr': "S'il vous reste moins de cartes Récompense que votre adversaire, défaussez toutes les cartes Énergie attachées à tous vos Pokémon.",
				'de-de': "If you have less Prize cards left than your opponent, discard all Energy cards attached to all of your Pokémon."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89608,
			},
		},
	],
}

export default card
