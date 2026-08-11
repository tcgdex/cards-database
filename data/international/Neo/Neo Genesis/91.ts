import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Bill's Teleporter",
		'fr-fr': "Téléporteur de Léo",
		'de-de': "Bills Teleporter"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip a coin. If heads, draw 4 cards.",
		'fr-fr': "Lancez une pièce. Si c'est face, piochez 4 cartes.",
		'de-de': "Flip a coin. If heads, draw 4 cards."
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
