import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Good Manners",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "In order to play this card, you can't have any Basic Pokémon cards in your hand. Show your hand to your opponent, then search your deck for a Basic Pokémon card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
	},
	thirdParty: {
		cardmarket: 274247,
		tcgplayer: 85839
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

