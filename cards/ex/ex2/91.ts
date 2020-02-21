import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-91",
	localId: 91,

	// Card informations
	name: {
		en: "Mysterious Fossil",
	},

	hp: 10,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/91/high",
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











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
