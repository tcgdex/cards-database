import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Koga",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Trainer",
	set: Set,

	thirdParty: {
		cardmarket: 274277,
		tcgplayer: 86502
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		},
	]
}

export default card
