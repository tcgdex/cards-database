import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Energy Charge",
		fr: "Recharge de puissance"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	energyType: "Special",

	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre pile de défausse 2 cartes Énergie (ou 1 s'il n'y en a qu'1), montrez-les à votre adversaire et mélangez-les à votre deck."
	}
}

export default card
