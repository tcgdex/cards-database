import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-136",
	localId: 136,

	// Card informations
	name: {
		en: "Town Map",
		fr: "Carte",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/136/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/136/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/136/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/136/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Tournez toutes vos cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

