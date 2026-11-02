import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Bill"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Draw 2 cards."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274873,
				tcgplayer: 83836
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83836,
				cardmarket: 274873
			}
		}
	],

	retreat: 0
}

export default card
