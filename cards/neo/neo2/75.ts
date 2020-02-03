import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-75",
	localId: 75,

	// Card informations
	name: {
		en: "Energy Ark",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/75/high.png",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card

