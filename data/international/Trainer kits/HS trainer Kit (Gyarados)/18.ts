import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		'en-us': "Bill",
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279097,
				tcgplayer: 83834,
			},
		},
	],

}

export default card
