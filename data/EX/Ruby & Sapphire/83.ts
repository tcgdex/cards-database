import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Lady Outing",
		fr: "Mademoiselle Sortie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez cette carte.\n\nChoisissez dans votre deck jusqu'à trois cartes Énergie de base différentes, montrez-les à votre adversaire et placez-les dans votre main. Mélangez ensuite votre deck."
	}
}

export default card
