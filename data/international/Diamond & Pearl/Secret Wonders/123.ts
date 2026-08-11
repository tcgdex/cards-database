import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Professor Rowan",
		'fr-fr': "Prof. Sorbier",
		'de-de': "Professor Eibe"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Choose 1 card in your hand and shuffle the rest of your cards into your deck. Then, draw 4 cards. (If this is the only card in your hand, you can't play this card.)",
		'fr-fr': "Choisissez 1 carte de votre main et mélangez le reste de vos cartes à votre deck. Ensuite, piochez 4 cartes. (Si c'est la seule carte que vous ayez en main, vous ne pouvez pas jouer cette carte.)",
		'de-de': "Wähle 1 Karte auf deiner Hand und mische alle anderen Karten auf deiner Hand zurück in dein Deck. Ziehe danach 4 Karten. (Wenn diese Karte die einzige Karte auf deiner Hand ist, kannst du sie nicht spielen.)"
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 277876,
		tcgplayer: 88408
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
