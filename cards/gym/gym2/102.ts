import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-102",
	localId: 102,

	// Card informations
	name: {
		en: "Chaos Gym",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/102/high",
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
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
