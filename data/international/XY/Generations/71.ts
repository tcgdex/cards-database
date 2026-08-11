import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Red Card",
		'fr-fr': "Carton Rouge",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
		'en-us': "Your opponent shuffles his or her hand into his or her deck and draws 4 cards."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288506,
		tcgplayer: 113729
	}
}

export default card
