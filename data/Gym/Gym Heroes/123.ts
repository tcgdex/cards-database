import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Duel",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	thirdParty: {
		cardmarket: 274259,
		tcgplayer: 87527
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

