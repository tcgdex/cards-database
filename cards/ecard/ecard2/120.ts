import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-120",
	localId: 120,

	// Card informations
	name: {
		en: "Energy Switch",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/120/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 154,
		name: "Mikio Menjo"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
