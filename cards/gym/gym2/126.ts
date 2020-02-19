import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-126",
	localId: 126,

	// Card informations
	name: {
		en: "Warp Point",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/126/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/126/high.png",
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
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card

