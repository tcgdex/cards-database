import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-138",
	localId: 138,

	// Card informations
	name: {
		en: "Undersea Ruins",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/138/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
