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
		en: "Crystal Cave"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Once during each player’s turn, that player may heal 30 damage from each of their Metal Pokemon and Dragon Pokemon."
	},

	trainerType: "Stadium"
}

export default card