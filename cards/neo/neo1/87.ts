import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-87",
	localId: 87,

	// Card informations
	name: {
		en: "Mary",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/87/high.png",
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
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card

