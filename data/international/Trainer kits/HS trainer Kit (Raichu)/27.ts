import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		'en-us': "Pokémon Collector",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279122,
				tcgplayer: 88219,
			},
		},
	],

}

export default card
