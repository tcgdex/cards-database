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
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. If you have any cards in your hand, shuffle 1 of them into your deck, then draw 3 cards.",
		fr: "Si vous avez des cartes dans votre main, mélangez-en 1 avec votre deck. Ensuite, piochez 3 cartes.",
		de: "If you have any cards in your hand, shuffel 1 of them into your deck, then draw 3 cards.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276263,
				tcgplayer: 83838
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276263,
				tcgplayer: 83838
			},
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 871579,
				tcgplayer: 477499
			},
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				cardmarket: 869583,
				tcgplayer: 477600
			},
		},
	],
}

export default card
