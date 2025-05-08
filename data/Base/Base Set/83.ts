import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Maintenance",
		pt: "Maintenance",
		fr: "Entretien",
		de: "Wartung"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Shuffle 2 of the other cards from your hand into your deck in order to draw a card.",
		pt: "Embaralhe 2 das outras cartas da sua mão no seu baralho para comprar uma carta.",
		fr: "Mélangez 2 des autres cartes de votre main avec votre deck pour piocher une carte.",
		de: "Mische 2 Karten aus Deiner Hand in Deinen Stapel."
	}
}

export default card
