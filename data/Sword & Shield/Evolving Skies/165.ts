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
		en: "Treasure Energy"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		en: "As long as this card is attached to a Pokemon, it provides Colorless Energy.\nIf you took this card as a face-down Prize card during your turn, before you put it into your hand, you may attach this card to 1 of your Pokemon."
	},

	energyType: "Special"
}

export default card