import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-152",
	localId: 152,

	// Card informations
	name: {
		en: "Warp Point",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/152/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/152/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card

