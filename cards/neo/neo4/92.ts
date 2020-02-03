import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-92",
	localId: 92,

	// Card informations
	name: {
		en: "Broken Ground Gym",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/92/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card

