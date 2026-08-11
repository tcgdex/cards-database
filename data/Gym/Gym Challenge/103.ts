import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Erika's Kindness"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Remove 2 damage counters from each Pokémon (yours and your opponent's) with any damage counters on it. If a Pokémon has just 1 damage counter, remove it."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85299,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85299,
				cardmarket: 274371
			}
		},
	],
}

export default card
