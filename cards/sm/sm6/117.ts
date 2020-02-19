import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-117",
	localId: 117,

	// Card informations
	name: {
		en: "Beast Energy ◇",
		fr: "Énergie Chimère ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/117/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/117/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/117/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/117/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	rarity: Rarity.RareHolo,

	category: Category.ENERGY,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
