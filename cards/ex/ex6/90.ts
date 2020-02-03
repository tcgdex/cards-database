import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-90",
	localId: 90,

	// Card informations
	name: {
		en: "Energy Switch",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/90/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 42,
		name: "Ken Ikuji"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card

