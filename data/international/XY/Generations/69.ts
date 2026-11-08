import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Pokémon Fan Club",
		'fr-fr': "Fan Club Pokémon",
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez jusqu'à 2 Pokémon de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for up to 2 Basic Pokémon, reveal them, and put them into your hand. Shuffle your deck afterward."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288505
	}
}

export default card
