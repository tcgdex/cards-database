import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-95",
	localId: 95,

	// Card informations
	name: {
		en: "Poké Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 174,
		name: "K Hoshiba"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
