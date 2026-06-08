import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Pokémon Breeder",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Put a Stage 2 Evolution card from your hand on the matching Basic Pokémon. You can play this card only when you would be allowed to evolve that Pokémon anyway.",
	},

	thirdParty: {
		cardmarket: 274867
	},

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	]
}

export default card
