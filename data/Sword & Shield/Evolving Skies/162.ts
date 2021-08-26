import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Switching Cups"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Switch a card from your hand with the top card of your deck."
	},

	trainerType: "Item"
}

export default card