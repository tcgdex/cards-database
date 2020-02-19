import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-257",
	localId: 257,

	// Card informations
	name: {
		en: "Recycle Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/257/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/257/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],













	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

