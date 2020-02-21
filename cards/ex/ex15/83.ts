import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-83",
	localId: 83,

	// Card informations
	name: {
		en: "Switch",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
