import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-126",
	localId: 126,

	// Card informations
	name: {
		en: "Lightning Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/126/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],













	rarity: Rarity.COMMON,

	category: Category.ENERGY,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
