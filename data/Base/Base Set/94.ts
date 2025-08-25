import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Potion",
		fr: "Potion",
		de: "Trank"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Retirez jusqu'à 2 marqueurs de dégâts d'1 de vos Pokémon.",
		de: "Entferne bis zu 2 Schadensmarken von einem Deiner Pokémon."
	},

	thirdParty: {
		cardmarket: 273789,
		tcgplayer: 42438
	}
}

export default card
