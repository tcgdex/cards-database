import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-73",
	localId: 73,

	// Card informations
	name: {
		en: "Energy Recycle System",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/73/high.png",
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
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card

