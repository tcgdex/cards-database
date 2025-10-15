import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Super Scoop Up",
		fr: "Super rappel",
		de: "Super-Anziehungskraft"
	},

	illustrator: "Shizurow",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, reprenez dans votre main 1 de vos Pokémon ainsi que toutes les cartes qui lui sont attachées.",
		de: "Wirf 1 Münze. Nimm bei 'Kopf' 1 deiner Pokémon und alle daran angelegten Karten zurück auf die Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277614,
		tcgplayer: 89638
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["tom-roos"]
		}
	]
}

export default card
