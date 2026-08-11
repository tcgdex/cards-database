import { Card } from 'models/database/card'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		'en-us': "Night Maintenance",
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your discard pile for up to 3 in any combination of Pokémon and basic Energy cards. Show them to your opponent and shuffle them into your deck."
	},

	trainerType: "Item",


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278410,
				tcgplayer: 87752
			}
		},
	],
}

export default card
