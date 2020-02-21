import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-81",
	localId: 81,

	// Card informations
	name: {
		en: "Energy Retrieval",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/81/high",
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
		name: "Base",
		code: "base1"
	}
}

export default card
