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
		en: "Dream Ball"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You can play this card only if you took it as a face-down Prize card, before you put it into your hand.\nSearch your deck for a Pokemon and put it onto your Bench. Then, shuffle your deck."
	},

	trainerType: "Item"
}

export default card