import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Poké Ball"
	},

	illustrator: "K Hoshiba",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck un Pokémon de base ou une carte Évolution, montrez la carte à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck."
	}
}

export default card
