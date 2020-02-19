import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-75",
	localId: 75,

	// Card informations
	name: {
		en: "Crystal Beach",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/75/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card

