import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Giovanni's Last Resort"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Remove all damage counters from 1 of your Pokémon with Giovanni in its name. Then discard your hand."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85711,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85711,
				cardmarket: 274373
			}
		},
	],
}

export default card
