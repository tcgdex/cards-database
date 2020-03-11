import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-100",
	localId: 100,

	// Card informations
	name: {
		en: "Lucky Stadium",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/100/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Imakuni?",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
