import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Raichu)'

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
				cardmarket: 279121,
				tcgplayer: 88191,
			},
		},
	],

}

export default card
