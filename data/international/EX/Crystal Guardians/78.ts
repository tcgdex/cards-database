import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Dual Ball",
		'fr-fr': "Double boule",
		'de-de': "Doppelball"
	},

	illustrator: "\"Big Mama\" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Flip 2 coins. For each heads, search your deck for a Basic Pokémon card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		'fr-fr': "Lancez 2 pièces. Pour chaque face, choisissez dans votre deck un Pokémon de base, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		'de-de': "Wirf 2 Münzen. Durchsuche dein Deck pro \"Kopf\" nach einer Basis-Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 277159,
		tcgplayer: 84987
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
