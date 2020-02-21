import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-84",
	localId: 84,

	// Card informations
	name: {
		en: "Ecogym",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/84/high",
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
