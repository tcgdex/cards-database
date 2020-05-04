import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-96",
	localId: 96,

	// Card informations
	name: {
		en: "Thought Wave Machine (Rocket's Secret Machine)",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/96/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Sumiyoshi Kizuki",











	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
