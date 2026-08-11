import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		'en-us': "Moomoo Milk",
	},

	illustrator: "Noriko Hotta",
	rarity: "None",
	category: "Trainer",
	set: Set,
	trainerType: "Item",
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279125,
				tcgplayer: 87577,
			},
		},
	],

}

export default card
