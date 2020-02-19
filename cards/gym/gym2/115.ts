import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-115",
	localId: 115,

	// Card informations
	name: {
		en: "Koga's Ninja Trick",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/115/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/115/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card

