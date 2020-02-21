import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-125",
	localId: 125,

	// Card informations
	name: {
		en: "Sabrina's Gaze",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/125/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
