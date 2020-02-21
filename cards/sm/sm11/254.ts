import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-254",
	localId: 254,

	// Card informations
	name: {
		en: "Tag Switch",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/254/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/254/high",
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
