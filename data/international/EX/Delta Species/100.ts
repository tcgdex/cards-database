import { Card } from 'models/database/card'
import Set from '../Delta Species'

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
	trainerType: "Item",

	effect: {
		'en-us': "Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand.",
		'fr-fr': "Lancez une pièce. Si c'est face, reprenez dans votre main 1 de vos Pokémon ainsi que toutes les cartes qui lui sont attachées.",
		'de-de': "Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand."
	},

	thirdParty: {
		cardmarket: 276863,
		tcgplayer: 89637
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

