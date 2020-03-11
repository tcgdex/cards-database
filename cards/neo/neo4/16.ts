import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/neo/neo4/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Milky Isobe",











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
