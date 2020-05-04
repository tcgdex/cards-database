import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
