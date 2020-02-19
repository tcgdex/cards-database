import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-81",
	localId: 81,

	// Card informations
	name: {
		en: "Energy Recycle System",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/81/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/81/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 156,
		name: "Zu-Ka"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card

