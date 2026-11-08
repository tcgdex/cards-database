import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Super Scoop Up",
		'fr-fr': "Super rappel",
		'de-de': "Super-Anziehungskraft"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand.",
		'fr-fr': "Lancez une pièce. Si c'est face, reprenez 1 de vos Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		'de-de': "Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274498,
				tcgplayer: 89634
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274498,
				tcgplayer: 89634
			}
		}
	]
}

export default card
