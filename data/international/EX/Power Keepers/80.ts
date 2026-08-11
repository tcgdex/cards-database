import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Professor Birch",
		'fr-fr': "Prof. Seko",
		'de-de': "Professor Birk"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw cards from your deck until you have 6 cards in your hand.",
		'fr-fr': "Piochez des cartes dans votre deck jusqu'à ce que vous ayez 6 cartes en main.",
		'de-de': "Ziehe so lange Karten von deinem Deck, bis du 6 Karten auf deiner Hand hast.",
	},

	thirdParty: {
		cardmarket: 277386,
		tcgplayer: 88383
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

