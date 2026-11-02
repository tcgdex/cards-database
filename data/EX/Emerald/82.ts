import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Professor Birch",
		fr: "Prof. Seko",
		de: "Professor Birk"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw cards from your deck until you have 6 cards in your hand.",
		fr: "Piochez des cartes de votre deck jusqu'à ce que vous ayez 6 cartes en main.",
		de: "Ziehe so lange Karten von deinem Deck, bis du 6 Karten auf deiner Hand hast.",
	},

	thirdParty: {
		tcgplayer: 88382,
		cardmarket: 276593
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88382,
				cardmarket: 276593
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88382,
				cardmarket: 276593
			},
		},
		{
			type: "holo",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 176630,
			},
		}
	],
}

export default card
