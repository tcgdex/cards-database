import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-98",
	localId: 98,

	// Card informations
	name: {
		en: "Energy Amplifier",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/98/high.png",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card

