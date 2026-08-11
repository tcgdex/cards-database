import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d'Énergie",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Déplacez une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
		'en-us': "Move a basic Energy from 1 of your Pokémon to another of your Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288498,
		tcgplayer: 113719
	}
}

export default card
