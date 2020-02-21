import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-93",
	localId: 93,

	// Card informations
	name: {
		en: "EXP.ALL",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/93/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
