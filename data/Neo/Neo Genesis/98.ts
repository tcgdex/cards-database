import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

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

	effect: {
		fr: "Lancez une pièce. Si c'est face, reprenez 1 de vos Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		de: "Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand."
	},

	thirdParty: {
		cardmarket: 274498
	}
}

export default card
