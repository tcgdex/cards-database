import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Take all Energy cards attached to 1 of your Pokémon with Sabrina in its name and attach them to another 1 of your Pokémon with Sabrina in its name.",
	},
	thirdParty: {
		cardmarket: 274378,
		tcgplayer: 88861
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
