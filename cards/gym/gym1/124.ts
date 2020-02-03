import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-124",
	localId: 124,

	// Card informations
	name: {
		en: "Narrow Gym",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/124/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/124/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card

