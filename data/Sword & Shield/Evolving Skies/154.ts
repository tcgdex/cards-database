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
		en: "Rescue Carrier"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Put up to 2 Pokemon, each with 90 HP or less, from your discard pile into your hand."
	},

	trainerType: "Item"
}

export default card