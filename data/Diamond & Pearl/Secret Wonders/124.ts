import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Rival",
		fr: "Rival",
		de: "Rivale"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Retournez les 5 cartes du dessus de votre deck. Votre adversaire choisit 3 de ces cartes. Placez ces cartes dans votre main et placez les 2 autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
		de: "Decke die obersten 5 Karten deines Decks auf. Dein Gegner wählt 3 von diesen Karten. Nimm die gewählten Karten auf die Hand und lege die restlichen 2 Karten zurück auf dein Deck. Mische dein Deck danach.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 277877,
		tcgplayer: 88765
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
