import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Super Scoop Up",
		fr: "Super rappel",
		de: "Super-Anziehungskraft"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, reprenez dans votre main 1 de vos Pokémon ainsi que toutes les cartes qui lui sont attachées.",
		de: "Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand."
	}
}

export default card
