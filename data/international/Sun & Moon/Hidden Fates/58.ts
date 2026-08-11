import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Jessie & James",
		'fr-fr': "Jessie et James",
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque joueur défausse 2 cartes de sa main. Votre adversaire défausse en premier.",
		'en-us': "Each player discards 2 cards from their hand. Your opponent discards first."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 381225,
		tcgplayer: 197711
	}
}

export default card
