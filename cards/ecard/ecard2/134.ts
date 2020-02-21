import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-134",
	localId: 134,

	// Card informations
	name: {
		en: "Super Energy Removal 2",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/134/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/134/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
