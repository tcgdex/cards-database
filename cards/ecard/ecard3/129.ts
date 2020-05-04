import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-129",
	localId: 129,

	// Card informations
	name: {
		en: "Miracle Sphere Alpha",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/129/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/129/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Hiromichi Sugiyama",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
