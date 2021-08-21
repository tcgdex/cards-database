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
		en: "Lucky Ice Pop"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Heal 20 damage from your Active Pokemon. If you healed any damage in this way, flip a coin. If heads, put this Lucky Ice Pop into your hand instead of the discard pile."
	},

	trainerType: "Item"
}

export default card