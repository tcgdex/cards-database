import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Energy Retrieval"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Trade 1 of the other cards in your hand for up to 2 basic Energy cards from your discard pile."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274872,
				tcgplayer: 85233
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85233,
				cardmarket: 274872
			}
		}
	],

	retreat: 0
}

export default card
