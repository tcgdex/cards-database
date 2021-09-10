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
		en: "Turffield Stadium"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Once during each player’s turn, that player may search their deck for an Evolution Grass Pokemon, reveal it, and put it into their hand. Then, that player shuffles their deck."
	},

	trainerType: "Stadium"
}

export default card