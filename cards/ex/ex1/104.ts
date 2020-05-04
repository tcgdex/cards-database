import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-104",
	localId: 104,

	// Card informations
	name: {
		en: "Grass Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],













	rarity: Rarity.COMMON,

	category: Category.ENERGY,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
