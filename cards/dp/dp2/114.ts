import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-114",
	localId: 114,

	// Card informations
	name: {
		en: "Quick Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
