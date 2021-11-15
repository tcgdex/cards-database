import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Holon Farmer",
		fr: "Fermier Holon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nDéfaussez une carte de votre main. Si vous ne pouvez pas défausser de carte de votre main, vous ne pouvez pas jouer cette carte.\n\nChoisissez dans votre pile de défausse 3 cartes Énergie de base et n'importe quelle combinaison de 3 Pokémon de base ou cartes Évolution. Montrez-les à votre adversaire et placez-les au dessus de votre deck. Ensuite, mélangez votre deck."
	}
}

export default card
