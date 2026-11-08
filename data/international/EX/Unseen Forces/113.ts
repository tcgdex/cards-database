import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Entei ☆",
		'fr-fr': "Entei ☆",
		'de-de': "Entei ☆"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Burning Turn",
				'fr-fr': "Tour brûlant",
				'de-de': "Burning Turn"
			},
			effect: {
				'en-us': "Switch Entei ☆ with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Entei ☆ avec 1 de vos Pokémon de Banc.",
				'de-de': "Switch Entei ☆ with 1 of your Benched Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Detonation",
				'fr-fr': "Détonation",
				'de-de': "Detonation"
			},
			effect: {
				'en-us': "If you have less Prize cards left than your opponent, discard the top 10 cards from your deck.",
				'fr-fr': "S'il vous reste moins de cartes Récompense que votre adversaire, défaussez les 10 cartes du dessus de votre deck.",
				'de-de': "If you have less Prize cards left than your opponent, discard the top 10 cards from your deck."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85275,
			},
		},
	],
}

export default card
