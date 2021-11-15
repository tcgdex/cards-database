import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Berry",
		fr: "Baie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Baie à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nN'importe quand entre deux tours, si le Pokémon auquel est attaché Baie a au moins 2 marqueurs de dégâts, vous pouvez retirer 2 de ces marqueurs et défausser Baie. Au début de chaque tour, si le Pokémon auquel est attaché Baie a au moins 2 marqueurs de dégâts, retirez 2 de ces marqueurs et défausser Baie."
	}
}

export default card
