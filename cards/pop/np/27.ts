import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "np-27",
	localId: 27,

	// Card informations
	name: {
		en: "Tropical Tidal Wave",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],













	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
