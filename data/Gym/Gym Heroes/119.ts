import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Tickling Machine"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, your opponent sets aside all the cards in his or her hand face down. Nobody may look at those cards. At the end of your opponent's next turn, your opponent puts those cards back into his or her hand. If tails, your turn ends immediately (you can't attack this turn)."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89910,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 89910,
				cardmarket: 274255
			}
		}
	],
}

export default card

