import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Bill’s Maintenance",
		fr: "Bill's Maintenance"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "If you have any cards in your hand, shuffle 1 of them into your deck, then draw 3 cards.",
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la."
	},

	trainerType: "Supporter",

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
