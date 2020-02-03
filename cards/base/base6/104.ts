import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base6-104",
	localId: 104,

	// Card informations
	name: {
		en: "Scoop Up",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/104/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/104/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card

