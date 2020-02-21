import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-126",
	localId: 126,

	// Card informations
	name: {
		en: "Fire Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/126/high",
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
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
