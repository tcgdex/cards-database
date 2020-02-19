import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-107",
	localId: 107,

	// Card informations
	name: {
		en: "Water Energy",
		fr: "Énergie Eau",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/107/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/107/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/107/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/107/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card

