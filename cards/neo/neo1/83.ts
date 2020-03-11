import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-83",
	localId: 83,

	// Card informations
	name: {
		en: "Arcade Game",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/83/high",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
