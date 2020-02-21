import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-151",
	localId: 151,

	// Card informations
	name: {
		en: "Super Scoop Up",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/151/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/151/high",
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
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
