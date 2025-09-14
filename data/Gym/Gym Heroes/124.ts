import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Narrow Gym",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	thirdParty: {
		cardmarket: 274260,
		tcgplayer: 87679
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

