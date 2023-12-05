import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Dusk Ball",
		fr: "Sombre Ball",
		de: "Finsterball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Regardez les 7 cartes du dessous de votre deck. Choisissez-y 1 Pokémon, montrez-le à votre adversaire et placez-le dans votre main. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
		de: "Schau dir die untersten 7 Karten deines Decks an. Wähle aus diesen 7 Karten 1 Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Lege die restlichen Karten auf dein Deck. Mische dein Deck danach."
	}
}

export default card
