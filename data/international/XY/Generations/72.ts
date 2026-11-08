import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Shauna",
		'fr-fr': "Sannah",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
		'en-us': "Shuffle your hand into your deck. Then, draw 5 cards."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288507,
		tcgplayer: 113730
	}
}

export default card
