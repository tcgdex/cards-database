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
		en: "Shopping Center"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Once during each player’s turn, that player may put a Pokemon Tool attached to 1 of their Pokemon into their hand."
	},

	trainerType: "Stadium"
}

export default card