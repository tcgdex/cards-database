import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-132",
	localId: 132,

	// Card informations
	name: {
		en: "Mirage Stadium",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/132/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/132/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Midori Harada",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
