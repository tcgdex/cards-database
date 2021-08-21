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
		en: "Spirit Mask"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Attach a Pokemon Tool to 1 of your Pokemon that doesn’t already have a Pokemon Tool attached.\n\nIf the Pokemon this card is attached to is in the Active Spot and is damaged by an attack from your opponent’s Pokemon (even if it is Knocked Out), your opponent discards a card from their hand."
	},

	trainerType: "Tool"
}

export default card