import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Super Scoop Up",
		fr: "Super rappel",
		de: "Super-Anziehungskraft"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c’est face, reprenez dans votre main l’un de vos Pokémon ainsi que toutes les cartes qui lui sont attachées.",
		en: "Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand.",
		de: "Wirf eine Münze. Nimm bei \"Kopf\" 1 deiner Pokémon und alle an es angelegten Karten auf deine Hand zurück."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0
}

export default card
