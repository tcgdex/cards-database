import { Card } from 'models/database/card'
import Set from '../Power Keepers'

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
		'fr-fr': "Choisissez dans votre deck un Pokémon de base (Pokémon-ex exclus) et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		'de-de': "Durchsuche dein Deck nach einer Basis-Pokémon-Karte (kein Pokémon-ex) und lege es auf deine Bank. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 277383,
		tcgplayer: 85897
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

