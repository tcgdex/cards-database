import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Professor Oak's Research",
		fr: "La recherche du Prof. Chen",
		de: "Prof. Eichs Nachforschungen"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nMélangez votre main à votre deck. Ensuite, piochez 5 cartes.",
		de: "Mische deine Handkarten in dein Deck und ziehe dann 5 Karten."
	}
}

export default card
