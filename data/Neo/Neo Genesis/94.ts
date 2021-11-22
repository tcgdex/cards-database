import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Miracle Berry",
		fr: "Baie miracle"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez Baie miracle à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nN'importe quand entre deux tours, si le Pokémon auquel est attaché Baie miracle est Endormi, Confus, Paralysé ou Empoisonné, vous pouvez retirer tous ces effets de ce Pokémon et défausser Baie miracle. Au début de chaque tour, si le Pokémon auquel est attaché Baie miracle est Endormi, Confus, Paralysé ou Empoisonné, retirez tous ces effets de ce Pokémon et défaussez Baie miracle."
	}
}

export default card
