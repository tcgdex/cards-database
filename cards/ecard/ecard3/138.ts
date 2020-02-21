import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-138",
	localId: 138,

	// Card informations
	name: {
		en: "Oracle",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/138/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
