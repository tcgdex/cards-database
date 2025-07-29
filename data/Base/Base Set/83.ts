import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Maintenance",
		fr: "Entretien",
		de: "Wartung"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez 2 des autres cartes de votre main avec votre deck pour piocher une carte.",
		de: "Mische 2 Karten aus Deiner Hand in Deinen Stapel."
	},

	thirdParty: {
		cardmarket: 273778
	}
}

export default card
