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
		en: "Look at the 7 cards from the bottom of your deck. Choose 1 Pokémon you find there, show it to your opponent, and put it into your hand. Put the remaining cards back on top of your deck. Shuffle your deck afterward.",
		fr: "Regardez les 7 cartes du dessous de votre deck. Choisissez-y 1 Pokémon, montrez-le à votre adversaire et placez-le dans votre main. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
		de: "Schau dir die untersten 7 Karten deines Decks an. Wähle aus diesen 7 Karten 1 Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Lege die restlichen Karten auf dein Deck. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 277739,
		tcgplayer: 85033
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
