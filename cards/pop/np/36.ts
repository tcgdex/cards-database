import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
