import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Center",
		pt: "Centro Pokémon",
		fr: "Centre Pokémon",
		de: "Pokémon Center"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Remove all damage counters from all of your own Pokémon with damage counters on them, then discard all Energy cards attached to those Pokémon.",
		pt: "Remova todos os contadores de dano de todos os seus Pokémon que tenham contadores de dano e, em seguida, descarte todos os cards de Energia vinculados a esses Pokémon.",
		fr: "Retirez tous les marqueurs de dégâts de tous vos propres Pokémon ayant des marqueurs de dégâts sur eux, puis défaussez toutes les cartes Énergie attachées à ces Pokémon.",
		de: "Entferne alle auf Deinem Pokémon abgelegten Schadensmarken. Entferne dann alle auf diesem Pokémon abgelegten Energiekarten."
	}
}

export default card
