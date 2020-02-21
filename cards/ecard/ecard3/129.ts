import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-129",
	localId: 129,

	// Card informations
	name: {
		en: "Miracle Sphere Alpha",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/129/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/129/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
