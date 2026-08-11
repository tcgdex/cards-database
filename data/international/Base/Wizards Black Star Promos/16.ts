import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Computer Error",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Trainer",

	set: Set,

	effect: {
		en: "You may draw up to 5 cards, then your opponent may draw up to 5 cards. Your turn is over now (you don't get to attack).",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84414
			},
		}
	]
}

export default card
