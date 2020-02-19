import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-103",
	localId: 103,

	// Card informations
	name: {
		en: "Superior Energy Retrieval",
		fr: "Récupération d'Énergie Supérieure",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/103/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/103/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/103/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/103/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, vous ne pouvez pas jouer cette carte.) Ajoutez 4 cartes Énergie de base de votre pile de défausse à votre main. (Vous ne pouvez pas choisir une carte que vous avez défaussée du fait de l'effet de cette carte.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

