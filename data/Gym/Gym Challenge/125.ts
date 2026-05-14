import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Transparent Walls",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Until the end of your opponent's next turn, prevent all damage from attacks done to your Benched Pokémon. (Any other effects of attacks still happen.)",
	},
	thirdParty: {
		cardmarket: 274393,
		tcgplayer: 90017
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
