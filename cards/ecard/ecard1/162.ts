import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-162",
	localId: 162,

	// Card informations
	name: {
		en: "Grass Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/162/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/162/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.COMMON,

	category: Category.ENERGY,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
