import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Championship Arena",
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",

	set: Set,

	cameoDexIds: [151, 251],

	trainerType: "Stadium",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84163
			}
		}
	]

}

export default card
