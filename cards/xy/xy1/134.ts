import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-134",
	localId: 134,

	// Card informations
	name: {
		en: "Water Energy",
		fr: "Énergie Eau",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/134/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/134/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/134/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/134/high.png",
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
		name: "XY",
		code: "xy1"
	}
}

export default card

