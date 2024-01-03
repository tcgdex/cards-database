import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Bill's Teleporter",
		fr: "Téléporteur de Léo",
		de: "Bills Teleporter"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, piochez 4 cartes.",
		de: "Flip a coin. If heads, draw 4 cards."
	}
}

export default card
