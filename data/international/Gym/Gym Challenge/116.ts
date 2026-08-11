import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Master Ball"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Look at 7 cards from the top of your deck. You may choose a Basic Pokémon or Evolution card from those cards, show it to your opponent, then put it into your hand. Shuffle the rest into your deck."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87251,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87251,
				cardmarket: 274384
			}
		},
	],
}

export default card
