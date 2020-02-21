import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-89",
	localId: 89,

	// Card informations
	name: {
		en: "Super Energy Retrieval",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/89/high",
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
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
