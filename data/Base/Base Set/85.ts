import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Center",
		fr: "Centre Pokémon",
		de: "Pokémon Center"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Retirez tous les marqueurs de dégâts de tous vos propres Pokémon ayant des marqueurs de dégâts sur eux, puis défaussez toutes les cartes Énergie attachées à ces Pokémon.",
		de: "Entferne alle auf Deinem Pokémon abgelegten Schadensmarken. Entferne dann alle auf diesem Pokémon abgelegten Energiekarten."
	}
}

export default card
