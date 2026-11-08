import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Karen",
		'fr-fr': "Marion"
	},

	illustrator: "You Iribi",
	rarity: "Promo",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "Each player shuffles all Pokémon in his or her discard pile into his or her deck. You may play only 1 Supporter card during your turn (before your attack).",
	},

	thirdParty: {
		cardmarket: 293006
	}
}

export default card
