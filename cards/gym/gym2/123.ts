import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-123",
	localId: 123,

	// Card informations
	name: {
		en: "Viridian City Gym",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/123/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/123/high.png",
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

