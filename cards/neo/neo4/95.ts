import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-95",
	localId: 95,

	// Card informations
	name: {
		en: "Radio Tower",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/95/high",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
