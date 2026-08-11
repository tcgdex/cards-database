import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Team Flare Grunt",
		'fr-fr': "Sbire de la Team Flare",
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		'en-us': "Discard an Energy attached to your opponent's Active Pokémon."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288508,
		tcgplayer: 113731
	}
}

export default card
