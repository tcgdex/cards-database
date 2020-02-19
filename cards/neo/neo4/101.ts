import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-101",
	localId: 101,

	// Card informations
	name: {
		en: "Magnifier",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/101/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card

