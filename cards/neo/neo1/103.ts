import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-103",
	localId: 103,

	// Card informations
	name: {
		en: "Super Rod",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/103/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/103/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card

