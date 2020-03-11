import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-64",
	localId: 64,

	// Card informations
	name: {
		en: "Old Rod",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/64/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
