import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Lt. Surge",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	thirdParty: {
		cardmarket: 274142,
		tcgplayer: 86849
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card

