import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-253",
	localId: 253,

	// Card informations
	name: {
		en: "Reset Stamp",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/253/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/253/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],













	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
