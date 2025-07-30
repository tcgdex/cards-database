import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Bill's Maintenance",
		fr: "Entretien de Leo",
		de: "Bills Wartung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la.\n\nSi vous avez des cartes dans votre main, mélangez-en 1 avec votre deck. Ensuite, piochez 3 cartes.",
		de: "If you have any cards in your hand, shuffel 1 of them into your deck, then draw 3 cards."
	},

	thirdParty: {
		cardmarket: 276263
	}
}

export default card
