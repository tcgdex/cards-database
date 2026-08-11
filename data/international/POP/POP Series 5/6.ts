import { Card } from 'models/database/card'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		'en-us': "Bill's Maintenance",
		'fr-fr': "Bill's Maintenance"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. If you have any cards in your hand, shuffle 1 of them into your deck, then draw 3 cards.",
		'fr-fr': "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83840,
			},
		},
	],

}

export default card
