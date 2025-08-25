import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Mr. Fuji",
		fr: "M. Fuji",
		de: "Mr. Fuji"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez un Pokémon de votre Banc. Mélangez-le dans votre deck avec toutes les cartes qui lui sont attachées.",
		de: "Wähle ein Pokémon auf deiner Bank. Mische es und alle darauf abgelegten Karten in den Deck."
	},

	thirdParty: {
		cardmarket: 273919,
		tcgplayer: 44460
	}
}

export default card
