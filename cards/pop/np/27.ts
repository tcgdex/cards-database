import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pop/np/27/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/27/high.png",
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

