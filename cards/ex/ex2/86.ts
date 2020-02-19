import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-86",
	localId: 86,

	// Card informations
	name: {
		en: "Double Full Heal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/86/high.png",
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
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card

