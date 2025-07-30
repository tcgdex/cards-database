import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Holon Farmer",
		fr: "Fermier Holon",
		de: "Holon-Bauer"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nDéfaussez une carte de votre main. Si vous ne pouvez pas défausser de carte de votre main, vous ne pouvez pas jouer cette carte.\n\nChoisissez dans votre pile de défausse 3 cartes Énergie de base et n'importe quelle combinaison de 3 Pokémon de base ou cartes Évolution. Montrez-les à votre adversaire et placez-les au dessus de votre deck. Ensuite, mélangez votre deck.",
		de: "Discard a card from your hand. If you can't discard a card from your hand, you can't play this card.\nSearch your discard pile for 3 basic Energy cards and any combination of 3 Basic Pokémon or Evolution cards, show them to your opponent, and put them on top of your deck. Shuffle your deck afterward."
	},

	thirdParty: {
		cardmarket: 276854
	}
}

export default card
