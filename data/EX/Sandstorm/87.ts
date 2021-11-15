import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Lanette's Net Search",
		fr: "Annette surfe sur le net"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la.\n\nChoisissez dans votre deck jusqu'à trois types de cartes Pokémon de base différents (sauf les cartes Bébé Pokémon), montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck."
	}
}

export default card
