import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Fisherman",
		'fr-fr': "Pêcheur",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Trainer",

	set: Set,











	effect: {
		'en-us': "Put 4 basic Energy cards from your discard pile into your hand. You may play only 1 Supporter card during your turn (before your attack).",
		'fr-fr': "Ajoutez 4 cartes Énergie de base de votre pile de défausse à votre main.",
	},
	trainerType: "Supporter",

}

export default card
