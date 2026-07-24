import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock's Training Method"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for a Basic Pokémon or Evolution card with Brock in its name. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward."
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83985,
				cardmarket: 274242
			}
		}
	]
}

export default card

