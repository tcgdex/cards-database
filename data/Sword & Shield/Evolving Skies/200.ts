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
		en: "Copycat"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Shuffle your hand into your deck. Then, draw a card for each card in your opponent’s hand."
	},

	trainerType: "Supporter"
}

export default card