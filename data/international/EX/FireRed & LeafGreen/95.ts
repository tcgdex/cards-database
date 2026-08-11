import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Poké Ball",
		'fr-fr': "Poké Ball",
		'de-de': "Pokéball"
	},

	illustrator: "K. Hoshiba",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Flip a coin. If heads, search your deck for a Basic Pokémon or Evolution card, show it to your opponent and put it into your hand. Shuffle your deck afterward.",
		'fr-fr': "Lancez une pièce. Si c'est face, cherchez dans votre deck un Pokémon de base ou une carte Évolution, montrez la carte à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		'de-de': "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach einem basis-Pokémon pder einer Evolutionskarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276271,
				tcgplayer: 88183,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276271,
				tcgplayer: 88183,
			},
		},
	],
}

export default card
