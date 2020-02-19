import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-141",
	localId: 141,

	// Card informations
	name: {
		en: "Weakness Guard",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/141/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/141/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 79,
		name: "Jungo Suzuki"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card

