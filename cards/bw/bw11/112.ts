import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw11/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Kent Kanetsuna",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
