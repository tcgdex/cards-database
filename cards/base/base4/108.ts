import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-108",
	localId: 108,

	// Card informations
	name: {
		en: "Super Energy Removal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/108/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
