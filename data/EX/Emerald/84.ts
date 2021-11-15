import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Scott",
		fr: "Scott"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez dans votre deck n'importe quelle combinaison de cartes Supporter et Stade (jusqu'à 3), montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck."
	}
}

export default card
