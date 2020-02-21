import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-86",
	localId: 86,

	// Card informations
	name: {
		en: "Energy Charge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/86/high",
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
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
