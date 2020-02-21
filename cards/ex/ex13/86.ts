import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-86",
	localId: 86,

	// Card informations
	name: {
		en: "Holon Fossil",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
