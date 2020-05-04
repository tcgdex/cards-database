import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-101",
	localId: 101,

	// Card informations
	name: {
		en: "Moo-Moo Milk",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/101/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Tomokazu Komiya",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
