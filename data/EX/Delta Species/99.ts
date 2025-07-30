import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Master Ball",
		fr: "Master Ball",
		de: "Meisterball"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Regardez les 7 cartes du dessus de votre deck. Choisissez un Pokémon de base ou une carte Évolution, montrez-le (ou la) à votre adversaire et placez-le (ou la) dans votre main. Replacez les 6 autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
		de: "Look at the top 7 cards from your deck. Choose a Basic Pokémon or Evolution card from those cards, show it to your opponent, and put it into your hand. Put the other 6 cards back on top of your deck. Shuffle your deck afterward."
	},

	thirdParty: {
		cardmarket: 276862
	}
}

export default card
