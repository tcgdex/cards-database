import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-102",
	localId: 102,

	// Card informations
	name: {
		en: "Switch",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Hiromichi Sugiyama",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
