import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Poké Balle"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, vous pouvez chercher n'importe quelle carte Pokémon de base ou Évolution dans votre deck. Montrez cette carte à votre adversaire, puis placez-la dans votre main. Mélangez ensuite votre deck."
	}
}

export default card
