import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Energy Charge",
		fr: "Charge d'Énergie",
		de: "Energy Charge*"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, shuffle up to 2 Energy cards from your discard pile into your deck.",
		fr: "Lancez une pièce. Si c'est face, mélangez jusqu'à 2 cartes Énergie de votre pile de défausse dans votre deck.",
		de: "Flip a coin. If heads, shuffle up to 2 Energy cards from your discard pile into your deck."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274485,
				tcgplayer: 85210
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274485,
				tcgplayer: 85210
			}
		}
	]
}

export default card
