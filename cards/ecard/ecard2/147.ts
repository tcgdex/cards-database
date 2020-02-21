import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-147",
	localId: 147,

	// Card informations
	name: {
		en: "Warp Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/147/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/147/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
