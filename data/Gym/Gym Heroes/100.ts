import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You may draw up to 3 cards, then your opponent may draw up to 3 cards.",
	},
	thirdParty: {
		cardmarket: 274236,
		tcgplayer: 85282
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

