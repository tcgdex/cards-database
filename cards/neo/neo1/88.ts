import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-88",
	localId: 88,

	// Card informations
	name: {
		en: "PokéGear",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/88/high.png",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card

