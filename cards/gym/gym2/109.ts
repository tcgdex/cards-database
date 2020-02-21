import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-109",
	localId: 109,

	// Card informations
	name: {
		en: "Resistance Gym",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/109/high",
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
