import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-135",
	localId: 135,

	// Card informations
	name: {
		en: "Lightning Energy",
		fr: "Énergie Électrique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/135/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/135/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/135/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/135/high",
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
