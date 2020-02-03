import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base3-58",
	localId: 58,

	// Card informations
	name: {
		en: "Mr. Fuji",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/58/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/58/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fossil",
		code: "base3"
	}
}

export default card

