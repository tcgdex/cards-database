import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-111",
	localId: 111,

	// Card informations
	name: {
		en: "Water Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
