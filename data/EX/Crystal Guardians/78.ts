import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Dual Ball",
		fr: "Double boule",
		de: "Doppelball"
	},

	illustrator: "\"Big Mama\" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez 2 pièces. Pour chaque face, choisissez dans votre deck un Pokémon de base, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		de: "Wirf 2 Münzen. Durchsuche dein Deck pro \"Kopf\" nach einer Basis-Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	}
}

export default card
