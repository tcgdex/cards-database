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
		en: "Zinnia’s Resolve"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You can play this card only if you discard 2 other cards from your hand.\nDraw a card for each of your opponent’s Pokemon in play."
	},

	trainerType: "Supporter"
}

export default card