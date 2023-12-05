import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

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
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez cette carte.\n\nPiochez des cartes dans votre deck jusqu'à ce que vous ayez six cartes en main.",
		de: "Ziehe so lange Karten von deinem Deck, bis du 6 Karten auf deiner Hand hast."
	}
}

export default card
