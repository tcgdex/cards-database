import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Professor Oak's Visit",
		fr: "La visite du Prof. Chen",
		de: "Professor Eichs Besuch"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 3 cartes. Ensuite, choisissez une carte de votre main et placez-la au dessous de votre deck.",
		de: "Ziehe 3 Karten. Danach wähle 1 Karte von deiner Hand und lege sie unter dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 277875,
		tcgplayer: 88405
	}
}

export default card
