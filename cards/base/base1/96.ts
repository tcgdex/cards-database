import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-96",
	localId: 96,

	// Card informations
	name: {
		en: "Double Colorless Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/96/high.png",
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
		name: "Base",
		code: "base1"
	}
}

export default card

