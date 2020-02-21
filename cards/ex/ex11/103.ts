import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-103",
	localId: 103,

	// Card informations
	name: {
		en: "Darkness Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/103/high",
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
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
