import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Potion"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Remove up to 2 damage counters from 1 of your Pokémon."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274875,
				tcgplayer: 88332
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88332,
				cardmarket: 274875
			}
		}
	],

	retreat: 0
}

export default card
