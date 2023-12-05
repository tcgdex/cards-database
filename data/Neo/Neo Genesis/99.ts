import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Berry",
		fr: "Baie",
		de: "Beere"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Baie à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nN'importe quand entre deux tours, si le Pokémon auquel est attaché Baie a au moins 2 marqueurs de dégâts, vous pouvez retirer 2 de ces marqueurs et défausser Baie. Au début de chaque tour, si le Pokémon auquel est attaché Baie a au moins 2 marqueurs de dégâts, retirez 2 de ces marqueurs et défausser Baie.",
		de: "Attach Berry to 1 of your Pokémon that doesn´t have a Pokémon Tool attached to it. At any time between turns, if there are at least 2 damage counters on the Pokémon Berry is attached to, you may remove 2 of them and discard Berry. At the start of each turn, if there at least 2 damage counters on the Pokémon Berry is attached to, remove 2 of them and discard Berry."
	}
}

export default card
