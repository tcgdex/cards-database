import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Energy Search",
		fr: "Recherche d'Énergie",
		de: "Energiesuche"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez une carte Énergie de base dans votre deck et placez-la dans votre main. Mélangez ensuite votre deck.",
		de: "Search your deck for a basic Energy card, reveal it, and put it into your hand. Shuffle your deck afterward."
	},

	thirdParty: {
		cardmarket: 273920
	}
}

export default card
