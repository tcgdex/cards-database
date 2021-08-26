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
		en: "Gordie"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Look at the top 7 cards of your deck. You may reveal any number of Energy cards you find there and put them into your hand. Shuffle the other cards back into your deck."
	},

	trainerType: "Supporter"
}

export default card