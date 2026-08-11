import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Brock"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Remove 1 damage counter from each of your Pokémon that has any damage counters on it."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83960,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83960,
				cardmarket: 274151
			}
		}
	],
}

export default card

