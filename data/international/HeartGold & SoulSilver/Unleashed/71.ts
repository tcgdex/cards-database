import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Cheerleader's Cheer",
		'fr-fr': "Encouragements hystériques",
		'de-de': "Cheerleader-Jubel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez 3 cartes. Votre adversaire peut piocher une carte.",
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 3 cards. Your opponent may draw a card.",
		'de-de': "Ziehe 3 Karten. Dein Gegner kann 1 Karte ziehen."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279227,
				tcgplayer: 84246
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279227,
				tcgplayer: 84246
			}
		},
	],
}

export default card
