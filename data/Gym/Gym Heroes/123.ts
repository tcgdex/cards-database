import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Duel",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You and your opponent play a game of Rock-Paper-Scissors. The winner shuffles his or her hand into his or her deck and draws a new hand of 5 cards. (If you don't know how to play Rock-Paper-Scissors, flip a coin to decide who's the winner.)",
	},
	thirdParty: {
		cardmarket: 274259,
		tcgplayer: 87527
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

