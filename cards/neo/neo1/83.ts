import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-83",
	localId: 83,

	// Card informations
	name: {
		en: "Arcade Game",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/83/high.png",
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

