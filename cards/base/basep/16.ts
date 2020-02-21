import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "basep-16",
	localId: 16,

	// Card informations
	name: {
		en: "Computer Error",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/16/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
