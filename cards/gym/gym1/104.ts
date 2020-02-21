import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-104",
	localId: 104,

	// Card informations
	name: {
		en: "The Rocket's Training Gym",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/104/high",
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
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
