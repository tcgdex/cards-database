import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		'en-us': "Professor Elm's Training Method",
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
				cardmarket: 279121,
				tcgplayer: 88393,
			},
		},
	],

}

export default card
