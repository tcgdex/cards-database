import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Elesa",
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "Search your deck for 3 Pokémon Tool cards, reveal them, and put them into your hand. Shuffle your deck afterward. You may play only 1 Supporter card during your turn (before your attack).",
	},

	thirdParty: {
		cardmarket: 281130
	}
}

export default card
