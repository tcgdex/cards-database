import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Poké Ball",
		'fr-fr': "Poké Balle",
		'de-de': "Pokéball"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Flip a coin. If heads, search your deck for a Basic Pokémon or Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		'fr-fr': "Lancez une pièce. Si c'est face, choisissez dans votre deck un Pokémon de base ou une carte Évolution, montrez-le (ou la) à votre adversaire et placez-le (ou la) dans votre main. Ensuite, mélangez votre deck.",
		'de-de': "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach einer Basis-Pokémon-Karte oder einer Evolutionskarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 277163
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
