import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Champions Festival",
		'fr-fr': "Festival des Champions",
	},

	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Une seule fois pendant le tour de chaque joueur, si ce joueur a 6 Pokémon en jeu, il peut soigner 10 dégâts à chacun de ses Pokémon.",
		'en-us': "Once during each player's turn, if that player has 6 Pokémon in play, he or she may heal 10 damage from each of his or her Pokémon."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 709547
	}
}

export default card
