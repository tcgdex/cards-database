import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-89",
	localId: 89,

	// Card informations
	name: {
		en: "Energy Removal 2",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
