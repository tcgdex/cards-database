import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

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
		en: "Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand.",
		fr: "Lancez une pièce. Si c'est face, reprenez 1 de vos Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		de: "Wirf eine Münze. Nimm bei 'Kopf' eines deiner Pokémon und alle daran angelegten Karten zurück auf deine Hand."
	},

	thirdParty: {
		cardmarket: 275026,
		tcgplayer: 89635
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
