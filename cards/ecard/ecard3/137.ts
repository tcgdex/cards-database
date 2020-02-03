import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-137",
	localId: 137,

	// Card informations
	name: {
		en: "Mystery Zone",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/137/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/137/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 42,
		name: "Ken Ikuji"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card

