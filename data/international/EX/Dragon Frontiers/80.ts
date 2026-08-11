import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Professor Oak's Research",
		'fr-fr': "La recherche du Prof. Chen",
		'de-de': "Prof. Eichs Nachforschungen"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck, then draw 5 cards.",
		'fr-fr': "Mélangez votre main à votre deck. Ensuite, piochez 5 cartes.",
		'de-de': "Mische deine Handkarten in dein Deck und ziehe dann 5 Karten.",
	},

	thirdParty: {
		cardmarket: 277285,
		tcgplayer: 88404
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
