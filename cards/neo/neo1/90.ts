import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-90",
	localId: 90,

	// Card informations
	name: {
		en: "Time Capsule",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/90/high.png",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card

