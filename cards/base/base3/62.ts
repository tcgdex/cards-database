import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base3-62",
	localId: 62,

	// Card informations
	name: {
		en: "Mysterious Fossil",
	},

	hp: 10,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/62/high",
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
		name: "Fossil",
		code: "base3"
	}
}

export default card
