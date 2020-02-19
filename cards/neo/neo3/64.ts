import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-64",
	localId: 64,

	// Card informations
	name: {
		en: "Old Rod",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/64/high.png",
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
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card

