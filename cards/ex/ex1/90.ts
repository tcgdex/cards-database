import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-90",
	localId: 90,

	// Card informations
	name: {
		en: "Energy Search",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Kai Ishikawa",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
