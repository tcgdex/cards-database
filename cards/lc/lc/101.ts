import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-101",
	localId: 101,

	// Card informations
	name: {
		en: "Potion Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card
