import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Remove 1 damage counter from each of your Pokémon that has any damage counters on it.",
	},
	thirdParty: {
		cardmarket: 274151,
		tcgplayer: 83959
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
