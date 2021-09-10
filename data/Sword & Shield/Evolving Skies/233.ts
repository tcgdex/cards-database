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
		en: "Toy Catcher"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Switch 1 of your opponent’s Benched Pokemon that has 50 HP or less remaining with your opponent’s Active Pokemon."
	},

	trainerType: "Item"
}

export default card