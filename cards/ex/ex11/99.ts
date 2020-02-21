import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-99",
	localId: 99,

	// Card informations
	name: {
		en: "Master Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
