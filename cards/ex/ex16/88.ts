import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-88",
	localId: 88,

	// Card informations
	name: {
		en: "Metal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/88/high",
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
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
