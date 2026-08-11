import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Great Ball",
		'fr-fr': "Super Ball",
		'de-de': "Superball"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Search your deck for a Basic Pokémon (excluding Pokémon-ex) and put it onto your Bench. Shuffle your deck afterward.",
		'fr-fr': "Cherchez dans votre deck un Pokémon de base (sauf les Pokémon-ex) et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		'de-de': "Durchsuche dein Deck nach einem Basis-Pokémon (kein Pokémon-ex) und lege es auf deine Bank. Mische dein Deck danach."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276268,
				tcgplayer: 85895
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276268,
				tcgplayer: 85895
			},
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"],
			thirdParty: {
				cardmarket: 276268,
				tcgplayer: 85895
			},
		},
	],
}

export default card
