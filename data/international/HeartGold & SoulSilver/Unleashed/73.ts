import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Emcee's Chatter",
		'fr-fr': "Bavardage du maître",
		'de-de': "MCs Geschwätz"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c’est face, piochez 3 cartes. Si c’est pile, piochez 2 cartes.",
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Flip a coin. If heads, draw 3 cards. If tails, draw 2 cards.",
		'de-de': "Wirf eine Münze. Ziehe bei \"Kopf\" 3 Karten. Ziehe bei \"Zahl\" 2 Karten."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279229,
				tcgplayer: 85187
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279229,
				tcgplayer: 85187
			}
		},
	],
}

export default card
