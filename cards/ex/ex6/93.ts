import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-93",
	localId: 93,

	// Card informations
	name: {
		en: "Life Herb",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
