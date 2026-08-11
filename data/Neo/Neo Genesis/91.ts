import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Bill's Teleporter",
		fr: "Téléporteur de Léo",
		de: "Bills Teleporter"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, draw 4 cards.",
		fr: "Lancez une pièce. Si c'est face, piochez 4 cartes.",
		de: "Flip a coin. If heads, draw 4 cards."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274491,
				tcgplayer: 83841
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274491,
				tcgplayer: 83841
			}
		}
	]
}

export default card
