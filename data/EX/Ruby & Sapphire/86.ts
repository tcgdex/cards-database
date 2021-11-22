import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Poké Balle"
	},

	illustrator: "K. Hoshiba",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck un Pokémon de base ou une carte Évolution, montrez la carte à votre adversaire et placez-la dans votre main. Mélangez ensuite votre deck."
	}
}

export default card
