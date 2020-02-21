import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-76",
	localId: 76,

	// Card informations
	name: {
		en: "Double Full Heal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/76/high",
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
		name: "Emerald",
		code: "ex9"
	}
}

export default card
