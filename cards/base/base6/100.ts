import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-100",
	localId: 100,

	// Card informations
	name: {
		en: "Full Heal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/100/high.png",
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
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card

