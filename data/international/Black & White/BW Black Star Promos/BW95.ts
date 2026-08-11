import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Champions Festival",
		'fr-fr': "Festival des Champions",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Trainer",

	set: Set,











	effect: {
		'en-us': "Once during each player's turn, if that player has 6 Pokémon in play, he or she may heal 10 damage from each of his or her Pokémon. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.",
		'fr-fr': "Une seule fois pendant le tour de chaque joueur, si ce joueur a 6 Pokémon en jeu, il peut soigner 10 dégâts à chacun de ses Pokémon.",
	},
	trainerType: "Stadium",

}

export default card
