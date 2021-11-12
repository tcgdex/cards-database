import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Gold Berry",
		fr: "Baie dorée"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Baie dorée à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nN'importe quand entre deux tours, si le Pokémon auquel est attaché Baie dorée a au moins 4 marqueurs de dégâts, vous pouvez retirer 4 de ces marqueurs et défausser Baie dorée. Au début de chaque tour, si le Pokémon auquel est attaché Baie d'or a au moins 4 marqueurs de dégâts, retirez 4 de ces marqueurs et défausser Baie dorée."
	}
}

export default card
