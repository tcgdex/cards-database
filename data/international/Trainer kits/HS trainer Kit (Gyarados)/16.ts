import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		'en-us': "Water Energy",
	},

	rarity: "None",
	category: "Energy",
	set: Set,
	types: [
		"Water",
	],
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279103,
				tcgplayer: 90522,
			},
		},
	],

}

export default card
