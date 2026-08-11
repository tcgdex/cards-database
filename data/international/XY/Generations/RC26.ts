import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Floral Crown",
		'fr-fr': "Couronne Florale",
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "À la fin du tour de votre adversaire, soignez 20 dégâts au Pokémon de base auquel cette carte est attachée.",
		'en-us': "At the end of your opponent's turn, heal 20 damage from the Basic Pokémon this card is attached to."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 288535
	}
}

export default card
