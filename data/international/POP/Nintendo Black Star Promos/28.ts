import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Championship Arena",
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",

	set: Set,

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
