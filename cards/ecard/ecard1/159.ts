import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-159",
	localId: 159,

	// Card informations
	name: {
		en: "Metal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/159/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/159/high",
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
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
