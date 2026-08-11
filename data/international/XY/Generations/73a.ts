import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Team Flare Grunt",
		'fr-fr': "Sbire de la Team Flare"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "Discard an Energy attached to your opponent's Active Pokémon. You may play only 1 Supporter card during your turn (before your attack).",
	},

	thirdParty: {
		cardmarket: 288508
	}
}

export default card
