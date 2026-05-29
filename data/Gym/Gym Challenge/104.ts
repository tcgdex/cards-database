import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Giovanni",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 of your Pokémon in play with Giovanni in its name. For the rest of your turn, you may evolve that Pokémon even if you just played or evolved it this turn or if this is your first turn. This effect also applies to the Pokémon it evolves into.",
	},
	thirdParty: {
		cardmarket: 274372,
		tcgplayer: 85709
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		},
	]
}

export default card
