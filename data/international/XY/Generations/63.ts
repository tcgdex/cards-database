import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Imakuni?",
		'fr-fr': "Imakuni ?",
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre Pokémon Actif est maintenant Confus.",
		'en-us': "Your Active Pokémon is now Confused."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288409,
		tcgplayer: 113721
	}
}

export default card
