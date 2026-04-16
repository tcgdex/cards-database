import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

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
		fr: "Piochez des cartes dans votre deck jusqu'à ce que vous ayez six cartes en main.",
		de: "Ziehe so lange Karten von deinem Deck, bis du 6 Karten auf deiner Hand hast.",
	},

	thirdParty: {
		cardmarket: 275737,
		tcgplayer: 88381
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		}
	]
}

export default card
