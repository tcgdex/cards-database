import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Pokémon Fan Club",
		fr: "Fan Club Pokémon",
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez jusqu'à 2 Pokémon de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		en: "Search your deck for up to 2 Basic Pokémon, reveal them, and put them into your hand. Shuffle your deck afterward."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288505
	}
}

export default card
