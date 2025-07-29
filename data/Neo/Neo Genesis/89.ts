import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Super Energy Retrieval",
		fr: "Super sauvegarde d'Énergie",
		de: "Super-Energiezurückgewinnung"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez 2 des autres cartes de votre main contre 4 Énergie de base de votre pile de défausse. Si vous avez moins de 4 cartes Énergie de base dans votre pile de défausse, prenez-les toutes.",
		de: "Trade 2 of the other cards in your hand for 4 basic Energy cards from your discard pile. If you have fewer than 4 basic Energy cards there, take all of them."
	},

	thirdParty: {
		cardmarket: 274489
	}
}

export default card
