import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Super Rod",
		fr: "Méga Canne"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, déplacez une carte Évolution (s'il y en a) de votre pile de défausse vers votre main. Si c'est pile, déplacez une carte Pokémon de base (s'il y en a) de votre pile de défausse vers votre main."
	}
}

export default card
