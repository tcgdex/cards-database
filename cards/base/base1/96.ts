import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base1-96",
	localId: 96,

	// Card informations
	name: {
		en: "Double Colorless Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card
