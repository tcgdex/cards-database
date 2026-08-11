import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Pokémon Center Lady",
		'fr-fr': "Dame du Centre Pokémon",
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez 60 dégâts et retirez tous les États Spéciaux de l’un de vos Pokémon.",
		'en-us': "Heal 60 damage and remove all Special Conditions from 1 of your Pokémon."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 394612
	}
}

export default card
