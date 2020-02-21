import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-102",
	localId: 102,

	// Card informations
	name: {
		en: "Water Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card
