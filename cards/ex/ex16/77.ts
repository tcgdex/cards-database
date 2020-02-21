import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-77",
	localId: 77,

	// Card informations
	name: {
		en: "Great Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 16,
		name: "Nakaoka"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
