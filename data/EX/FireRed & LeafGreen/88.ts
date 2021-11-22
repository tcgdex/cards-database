import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Celio's Network",
		fr: "Le réseau de Cileo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la.\n\nCherchez dans votre deck un Pokémon de base ou une carte Évolution (sauf les Pokémon-ex), montrez la carte à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck."
	}
}

export default card
