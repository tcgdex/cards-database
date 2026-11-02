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
		en: "Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand.",
		fr: "Lancez une pièce. Si c'est face, reprenez dans votre main 1 de vos Pokémon ainsi que toutes les cartes qui lui sont attachées.",
		de: "Wirf 1 Münze. Nimm bei \"Kopf\" 1 deiner Pokémon und alle daran angelegten Karten zurück auf die Hand."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276275,
				tcgplayer: 89636
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276275,
				tcgplayer: 89636
			},
		},
	],
}

export default card
