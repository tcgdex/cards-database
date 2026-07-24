import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Remove 1 damage counter from each of your Pokémon that has any damage counters on it."
	},
	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83959,
				cardmarket: 274151
			}
		}
	]
}

export default card
