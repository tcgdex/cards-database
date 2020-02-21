import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-113",
	localId: 113,

	// Card informations
	name: {
		en: "Cinnabar City Gym",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/113/high",
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
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
