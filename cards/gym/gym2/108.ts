import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-108",
	localId: 108,

	// Card informations
	name: {
		en: "Misty's Wish",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/108/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card

