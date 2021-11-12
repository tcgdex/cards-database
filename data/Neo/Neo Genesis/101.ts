import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Moo-Moo Milk",
		fr: "Lait Meumeu"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 de vos Pokémon. Lancez 2 pièces. Retirez de ce Pokémon 2 marqueurs de dégâts multipliés par le nombre de faces. Si le Pokémon a moins de marqueurs de dégâts que cela, retirez-les tous."
	}
}

export default card
