import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Lass",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You and your opponent show each other your hands, then shuffle all the Trainer cards from your hands into your decks.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274027,
				tcgplayer: 42554
			}
		}
	]
}

export default card
