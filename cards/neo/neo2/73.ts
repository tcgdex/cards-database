import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-73",
	localId: 73,

	// Card informations
	name: {
		en: "Hyper Devolution Spray",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/73/high",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
