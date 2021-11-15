import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Energy Recycle System",
		fr: "Recyclage d'énergie"
	},

	illustrator: "Zu-Ka",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Cherchez dans votre deck des cartes Énergie de base. Vous pouvez soit montrer une carte Énergie de base à votre adversaire et la placer dans votre main, soit montrer trois cartes Énergie de base à votre adversaire et les mélanger à votre deck."
	}
}

export default card
