import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-16",
	localId: 16,

	// Card informations
	name: {
		en: "Miracle Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/16/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/16/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 129,
		name: "Milky Isobe"
	},











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card

