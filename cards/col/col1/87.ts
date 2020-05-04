import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-87",
	localId: 87,

	// Card informations
	name: {
		en: "Metal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Kent Kanetsuna",











	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
