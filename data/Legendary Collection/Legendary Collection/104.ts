import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Scoop Up"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 of your Pokémon in play and return its Basic Pokémon card to your hand. (Discard all cards attached to that card.)"
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274869,
				tcgplayer: 88973
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88973,
				cardmarket: 274869
			}
		}
	],

	retreat: 0
}

export default card
