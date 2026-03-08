import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

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
		de: "Wirf 1 Münze. Nimm bei \"Kopf\" 1 deiner Pokémon und alle daran angelegten Karten zurück auf die Hand."
	},

	thirdParty: {
		cardmarket: 276275,
		tcgplayer: 89636
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
