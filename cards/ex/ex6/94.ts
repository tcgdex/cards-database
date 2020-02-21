import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-94",
	localId: 94,

	// Card informations
	name: {
		en: "Mt. Moon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 16,
		name: "Nakaoka"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
