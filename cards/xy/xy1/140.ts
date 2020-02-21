import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-140",
	localId: 140,

	// Card informations
	name: {
		en: "Fairy Energy",
		fr: "Énergie Fée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/140/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/140/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/140/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/140/high",
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
