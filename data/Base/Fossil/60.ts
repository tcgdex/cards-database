import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Gambler",
		fr: "Joueur"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez votre main dans votre deck. Lancez une pièce. Si c'est face, piochez 8 cartes. Si c'est pile, piochez 1 carte."
	}
}

export default card
