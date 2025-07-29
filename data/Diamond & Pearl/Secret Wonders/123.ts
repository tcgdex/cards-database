import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Professor Rowan",
		fr: "Prof. Sorbier",
		de: "Professor Eibe"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 carte de votre main et mélangez le reste de vos cartes à votre deck. Ensuite, piochez 4 cartes. (Si c'est la seule carte que vous ayez en main, vous ne pouvez pas jouer cette carte.)",
		de: "Wähle 1 Karte auf deiner Hand und mische alle anderen Karten auf deiner Hand zurück in dein Deck. Ziehe danach 4 Karten. (Wenn diese Karte die einzige Karte auf deiner Hand ist, kannst du sie nicht spielen.)"
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 277876
	}
}

export default card
