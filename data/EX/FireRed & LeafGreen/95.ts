import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
		de: "Pokéball"
	},

	illustrator: "K Hoshiba",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck un Pokémon de base ou une carte Évolution, montrez la carte à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		de: "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach einem basis-Pokémon pder einer Evolutionskarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	}
}

export default card
