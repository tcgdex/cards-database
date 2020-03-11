import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "np-36",
	localId: 36,

	// Card informations
	name: {
		en: "Tropical Tidal Wave",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],













	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
