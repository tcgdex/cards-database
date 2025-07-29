import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Clemont",
		fr: "Lem",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez jusqu'à 4 cartes Énergie Lightning dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		en: "Search your deck for up to 4 Lightning Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288410
	}
}

export default card
