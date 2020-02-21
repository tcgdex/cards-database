import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-94",
	localId: 94,

	// Card informations
	name: {
		en: "Energy Search",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 124,
		name: "Kai Ishikawa"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
