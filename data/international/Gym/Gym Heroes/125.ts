import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Sabrina's Gaze"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Each player shuffles his or her hand into his or her deck and draws a new hand of the same number of cards."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88873,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88873,
				cardmarket: 274261
			}
		}
	],
}

export default card

