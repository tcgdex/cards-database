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
		en: "Single Strike Scroll of the Fanged Dragon"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Attach a Pokemon Tool to 1 of your Pokemon that doesn’t already have a Pokemon Tool attached.\n\nThe Single Strike Pokemon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.)"
	},

	trainerType: "Tool"
}

export default card