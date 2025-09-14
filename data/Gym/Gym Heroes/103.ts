import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "No Removal Gym",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	thirdParty: {
		cardmarket: 274239,
		tcgplayer: 87789
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

