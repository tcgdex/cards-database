import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Good Manners"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "In order to play this card, you can't have any Basic Pokémon cards in your hand. Show your hand to your opponent, then search your deck for a Basic Pokémon card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85839,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85839,
				cardmarket: 274247
			}
		}
	],
}

export default card

