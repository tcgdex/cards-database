import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		'en-us': "Switch",
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "None",
	category: "Trainer",
	set: Set,
	trainerType: "Item",
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279123,
				tcgplayer: 89719,
			},
		},
	],

}

export default card
