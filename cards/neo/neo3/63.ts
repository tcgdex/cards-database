import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-63",
	localId: 63,

	// Card informations
	name: {
		en: "Rocket's Hideout",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/63/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
