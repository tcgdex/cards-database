import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "The Boss's Way"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for an Evolution card with Dark in its name. Show it to your opponent and put it into your hand. Shuffle your deck afterward."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274870,
				tcgplayer: 89895
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89895,
				cardmarket: 274870
			}
		}
	],

	retreat: 0
}

export default card
