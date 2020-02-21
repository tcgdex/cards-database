import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-87",
	localId: 87,

	// Card informations
	name: {
		en: "Double Rainbow Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],













	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
