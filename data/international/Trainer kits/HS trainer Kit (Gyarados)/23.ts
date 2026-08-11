import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		'en-us': "Poké Ball",
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
				cardmarket: 279110,
				tcgplayer: 88190,
			},
		},
	],

}

export default card
