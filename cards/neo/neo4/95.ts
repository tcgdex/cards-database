import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-95",
	localId: 95,

	// Card informations
	name: {
		en: "Radio Tower",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/95/high.png",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card

