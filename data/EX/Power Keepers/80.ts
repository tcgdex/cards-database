import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Professor Birch",
		fr: "Prof. Seko",
		de: "Professor Birk"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nPiochez des cartes dans votre deck jusqu'à ce que vous ayez 6 cartes en main.",
		de: "Ziehe so lange Karten von deinem Deck, bis du 6 Karten auf deiner Hand hast."
	},

	thirdParty: {
		cardmarket: 277386,
		tcgplayer: 88383
	}
}

export default card
