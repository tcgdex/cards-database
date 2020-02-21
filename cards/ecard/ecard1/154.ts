import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-154",
	localId: 154,

	// Card informations
	name: {
		en: "Full Heal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/154/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/154/high",
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
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
