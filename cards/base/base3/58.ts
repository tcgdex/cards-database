import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base3-58",
	localId: 58,

	// Card informations
	name: {
		en: "Mr. Fuji",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/58/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Ken Sugimori",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fossil",
		code: "base3"
	}
}

export default card
