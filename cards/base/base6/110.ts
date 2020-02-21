import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-110",
	localId: 110,

	// Card informations
	name: {
		en: "Potion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/110/high",
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
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
