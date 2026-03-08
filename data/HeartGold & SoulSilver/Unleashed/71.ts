import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Cheerleader’s Cheer",
		fr: "Encouragements hystériques",
		de: "Cheerleader-Jubel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 3 cartes. Votre adversaire peut piocher une carte.",
		en: "Draw 3 cards. Your opponent may draw a card.",
		de: "Ziehe 3 Karten. Dein Gegner kann 1 Karte ziehen."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
	],

	hp: 0
}

export default card
