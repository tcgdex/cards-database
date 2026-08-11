import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Recall"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "For your attack this turn, your Active Pokémon can use any attack from its Basic Pokémon card or any Evolution card attached to it. (You still have to pay for that attack's Energy cost.)"
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88650,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88650,
				cardmarket: 274252
			}
		}
	],
}

export default card

