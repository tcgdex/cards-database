import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-94",
	localId: 94,

	// Card informations
	name: {
		en: "Holon Research Tower",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/94/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card

