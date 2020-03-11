import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base1-102",
	localId: 102,

	// Card informations
	name: {
		en: "Water Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card
