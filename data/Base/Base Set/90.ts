import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Super Potion",
		pt: "Super Poção",
		fr: "Super Potion",
		de: "Supertrank"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard 1 Energy card attached to your own Pokémon in order to remove up to 4 damage counters from that Pokémon.",
		pt: "Descarte 1 card de Energia anexado ao seu próprio Pokémon para remover até 4 contadores de dano daquele Pokémon.",
		fr: "Défaussez 1 carte Énergie attachée à 1 de vos propres Pokémon afin de retirer jusqu'à 4 marqueurs de dégâts de ce Pokémon.",
		de: "Entferne eine auf einem Deiner Pokémon abgelegte Energiekarte, um das Pokémon von bis zu vier Schadensmarken zu befreien."
	}
}

export default card
