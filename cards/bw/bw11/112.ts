import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-112",
	localId: 112,

	// Card informations
	name: {
		en: "Energy Switch",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/112/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/112/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card

