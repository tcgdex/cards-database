import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Emcee’s Chatter",
		fr: "Bavardage du maître",
		de: "MCs Geschwätz"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c’est face, piochez 3 cartes. Si c’est pile, piochez 2 cartes.",
		en: "Flip a coin. If heads, draw 3 cards. If tails, draw 2 cards.",
		de: "Wirf eine Münze. Ziehe bei \"Kopf\" 3 Karten. Ziehe bei \"Zahl\" 2 Karten."
	},

	trainerType: "Supporter",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0
}

export default card
