import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "The Rocket's Trap",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Trainer",
	set: Set,

	thirdParty: {
		cardmarket: 274155,
		tcgplayer: 89897
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		}
	]
}

export default card
