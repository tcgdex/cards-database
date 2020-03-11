import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-113",
	localId: 113,

	// Card informations
	name: {
		en: "Double Colorless Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "5ban Graphics",











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
