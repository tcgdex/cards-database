import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika's Maids"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Trade 2 of the other cards in your hand for up to 2 Basic Pokémon and/or Evolution cards with Erika in their names from your deck. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward."
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85300,
				cardmarket: 274245
			}
		}
	]
}

export default card

