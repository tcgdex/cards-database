import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-94",
	localId: 94,

	// Card informations
	name: {
		en: "Metal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/94/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 129,
		name: "Milky Isobe"
	},











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card

