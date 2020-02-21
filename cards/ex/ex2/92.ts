import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-92",
	localId: 92,

	// Card informations
	name: {
		en: "Root Fossil",
	},

	hp: 40,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/92/high",
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











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
