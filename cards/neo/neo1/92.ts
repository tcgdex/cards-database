import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-92",
	localId: 92,

	// Card informations
	name: {
		en: "Card-Flip Game",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/92/high.png",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card

