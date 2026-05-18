import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "The Rocket's Trap",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, choose up to 3 cards at random from your opponent's hand (don't look at them). Your opponent shuffles those cards into his or her deck.",
	},
	thirdParty: {
		cardmarket: 274155,
		tcgplayer: 89897
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
