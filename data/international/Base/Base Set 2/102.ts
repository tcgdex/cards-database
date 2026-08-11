import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Impostor Professor Oak",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",

	set: Set,

	effect: {
		'en-us': "Your opponent shuffles his or her hand into his or her deck, then draws 7 cards.",
	},

	
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274025
			}
		}
	]
}

export default card
