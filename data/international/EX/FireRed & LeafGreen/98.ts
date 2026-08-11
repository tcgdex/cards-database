import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Prof. Oak's Research",
		fr: "La recherche du Prof. Chen",
		de: "Professor Eichs Nachforschunge"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck, then draw 5 cards.",
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
		de: "Mische deine Hand in dein Deck, und ziehe dann 5 Karten.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276274,
				tcgplayer: 88403
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276274,
				tcgplayer: 88403
			},
		},
		{
			type: "normal",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 176629
			},
		},
	],
}

export default card
