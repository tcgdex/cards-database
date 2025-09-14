import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Tickling Machine",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	thirdParty: {
		cardmarket: 274255,
		tcgplayer: 89910
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

