import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-102",
	localId: 102,

	// Card informations
	name: {
		en: "Impostor Professor Oak",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/102/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/102/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card

