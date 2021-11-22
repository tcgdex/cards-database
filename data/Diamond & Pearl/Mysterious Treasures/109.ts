import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Bebe's Search",
		fr: "La recherche d'Amelle"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez une carte de votre main et placez-la au dessus de votre deck. Choisissez dans votre deck un Pokémon, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. (Si c'est la seule carte que vous ayez en main, vous ne pouvez pas jouer cette carte.)"
	}
}

export default card
