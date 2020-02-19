import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-113",
	localId: 113,

	// Card informations
	name: {
		en: "Double Colorless Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/113/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/113/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card

