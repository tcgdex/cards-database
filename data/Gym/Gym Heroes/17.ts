import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Lt. Surge"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play this card only if you have at least 1 Basic Pokémon card in your hand. Put a Basic Pokémon card from your hand into play as your Active Pokémon. Put your old Active Pokémon onto your Bench. (You can't play this card if your Bench is full.)"
	},
	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86848,
				cardmarket: 274153
			}
		}
	]
}

export default card
