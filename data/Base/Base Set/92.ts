import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Energy Removal",
		fr: "Suppression d'Énergie",
		de: "Energie-Absauger"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 carte Énergie attachée à 1 des Pokémon de votre adversaire et défaussez-la.",
		de: "Wähle eine auf einem Pokémon Deines gegners abgelegte Energiekarte und entferne sie."
	}
}

export default card
