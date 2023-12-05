import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Energy Retrieval",
		fr: "Sauvegarde d'Énergie",
		de: "Energiezugewinnung"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Ajoutez à votre main jusqu'à 2 cartes Énergie de base de votre pile de défausse.[1]",
		de: "Tausche eine Karte auf Deiner Hand gegen bis zu 2 Basis-Energiekarten von Deinem Ablagestapel."
	}
}

export default card
