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
		en: "Digging Gloves"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Attach a Pokemon Tool to 1 of your Pokemon that doesn’t already have a Pokemon Tool attached.\n\nThe attacks of the Pokemon this card is attached to do 30 more damage to your opponent’s Active Fighting Pokemon (before applying Weakness and Resistance)."
	},

	trainerType: "Tool"
}

export default card