import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Imposter Professor Oak",
		'fr-fr': "Faux Professeur Chen"
	},

	illustrator: "Ken Sugimori",
	rarity: "Classic Collection",
	category: "Trainer",
	trainerType: "Supporter",

	effect: {
		'en-us': "Your opponent shuffles his or her hand into his or her deck, then draws 7 cards.",
		'fr-fr': "Votre adversaire mélange sa main avec son deck, puis pioche 7 cartes."
	},


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576774,
				tcgplayer: 250322
			}
		},
	],
}

export default card
