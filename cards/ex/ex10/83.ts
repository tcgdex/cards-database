import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-83",
	localId: 83,

	// Card informations
	name: {
		en: "Energy Root",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
