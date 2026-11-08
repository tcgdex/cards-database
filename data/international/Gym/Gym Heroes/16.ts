import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Erika"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "You may draw up to 3 cards, then your opponent may draw up to 3 cards."
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85281,
			},
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85281,
				cardmarket: 274152
			}
		}
	],
}

export default card
