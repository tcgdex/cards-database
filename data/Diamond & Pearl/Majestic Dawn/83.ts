import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Mom's Kindness",
		fr: "La gentillesse de Maman",
		de: "Mutters Fürsorge"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Ziehe 2 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278132
	}
}

export default card
