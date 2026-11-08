import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Corsola",
		'fr-fr': "Corayon",
		'de-de': "Corasonn"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [222],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Coral Glow",
				'fr-fr': "Rayon de corail",
				'de-de': "Coral Glow"
			},
			effect: {
				'en-us': "Draw a number of cards up to the number of your opponent's Basic Pokémon in play. (You can't have more than 10 cards in your hand in this way.)",
				'fr-fr': "Vous pouvez piocher autant de cartes que votre adversaire possède de Pokémon de base en jeu. (Vous ne pouvez pas avoir plus de 10 cartes en main de cette façon.)",
				'de-de': "Draw a number of cards up to the number of your opponent's Basic Pokémon in play. (You can't have more than 10 cards in your hand in this way.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'de-de': "Surf"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84439,
				cardmarket: 276106
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84439,
				cardmarket: 276106
			}
		},
	]
}

export default card
