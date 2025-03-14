import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Double Colorless Energy",
		pt: "Energia Dupla Incolor",
		fr: "Double Énergie Incolore",
		de: "Doppelte farblose Energie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Provides Colorless Colorless energy. Doesn't count as a basic Energy card.",
		pt: "Fornece 2 Energias Incolor. Não conta como uma carta de Energia básica.",
		de: "Liefert   Energie. Zählt nicht als Basis-Energiekarte."
	}
}

export default card
