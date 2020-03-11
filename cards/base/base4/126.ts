import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base4-126",
	localId: 126,

	// Card informations
	name: {
		en: "Fire Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/126/high",
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
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
