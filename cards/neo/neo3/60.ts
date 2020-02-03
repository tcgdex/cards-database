import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-60",
	localId: 60,

	// Card informations
	name: {
		en: "Balloon Berry",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/60/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/60/high.png",
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
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card

