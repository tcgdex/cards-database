import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Energy Flow"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "For each of your Pokémon, you may return any number of Energy cards attached to it to your hand."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85213,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85213,
				cardmarket: 274258
			}
		}
	],
}

export default card

