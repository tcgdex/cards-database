import { Card } from 'models/database/card'
import Set from '../Best of game'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Professor Elm"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle your hand into your deck. Then, draw 7 cards. You can’t play any more Trainer cards this turn."
	},

	variants: [
		{
			type: "reverse",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 275413,
				tcgplayer: 88387
			},
		},
	]
}

export default card
