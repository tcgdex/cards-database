import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Max Revive"
	},

	illustrator: "Hikaru Koike",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard 2 Energy cards from your hand in order to put 1 Basic Pokémon from your discard pile onto your Bench. (You can't play Max Revive if your Bench is full.)"
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87268,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87268,
				cardmarket: 274385
			}
		},
	],
}

export default card
