import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-90",
	localId: 90,

	// Card informations
	name: {
		en: "Rare Candy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/90/high",
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
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
