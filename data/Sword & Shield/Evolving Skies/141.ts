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
		en: "Aroma Lady"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. If you do, your Active Pokemon recovers from all Special Conditions."
	},

	trainerType: "Supporter"
}

export default card