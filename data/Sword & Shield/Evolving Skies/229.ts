import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Boost Shake"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Search your deck for a card that evolves from 1 of your Pokemon and put it onto that Pokemon to evolve it. Then, shuffle your deck. You can use this card during your first turn or on a Pokemon that was put into play this turn. Your turn ends."
	},

	trainerType: "Item"
}

export default card