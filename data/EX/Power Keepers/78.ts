import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Master Ball",
		fr: "Master Ball",
		de: "Meisterball"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Regardez les 7 cartes du dessus de votre deck. Choisissez un Pokémon de base ou une carte Évolution parmi ces cartes, montrez-le (ou la) à votre adversaire et placez-le (ou la) dans votre main. Replacez les 6 autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
		de: "Schau dir die obersten 7 Karten deines Decks an. Wähle aus den 7 Karten eine Basis-Pokémon-Karte oder Evolutionskarte, zeige sie deinem Gegner und nimm sie auf die Hand. Die anderen 6 Karten legst du auf dein Deck. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 277384,
		tcgplayer: 87255
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

