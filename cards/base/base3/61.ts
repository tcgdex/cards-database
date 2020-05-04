import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base3-61",
	localId: 61,

	// Card informations
	name: {
		en: "Recycle",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/61/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Fossil",
		code: "base3"
	}
}

export default card
