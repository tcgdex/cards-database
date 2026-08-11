import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
		'de-de': "Hornliu"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		13,
	],

	hp: 50,

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
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Call for Family"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Grass Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base  et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for up to 2  Basic Pokémon and put them onto your bench. Suffle your deck afterward."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Spurt",
				'fr-fr': "Jet de poison",
				'de-de': "Poison Spurt"
			},
			effect: {
				'en-us': "Discard a Grass Energy card attached to Weedle. The Defending Pokémon is now Poisoned.",
				'fr-fr': "Défaussez une carte Énergie  attachée à Aspicot. Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Discard a  Energy Card attached to Weedle. The Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276262,
				tcgplayer: 90542
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276262,
				tcgplayer: 90542
			},
		},
	],
}

export default card
