import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Duel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You and your opponent play a game of Rock-Paper-Scissors. The winner shuffles his or her hand into his or her deck and draws a new hand of 5 cards. (If you don't know how to play Rock-Paper-Scissors, flip a coin to decide who's the winner.)"
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87527,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87527,
				cardmarket: 274259
			}
		}
	],
}

export default card

