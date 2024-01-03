import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
		de: "Pokéball"
	},
	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		fr: "Lancez une pièce. Si c'est face, choisissez 1 Pokémon dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		de: "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach einer Basis-Pokémon-Karte oder einer Evolutionskarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},
	trainerType: "Item",

}

export default card
