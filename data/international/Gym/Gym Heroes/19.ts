import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "The Rocket's Trap"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip a coin. If heads, choose up to 3 cards at random from your opponent's hand (don't look at them). Your opponent shuffles those cards into his or her deck."
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89897,
			},
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 89897,
				cardmarket: 274155
			}
		}
	],
}

export default card
