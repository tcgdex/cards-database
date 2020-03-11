import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-95",
	localId: 95,

	// Card informations
	name: {
		en: "Metal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/95/high",
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
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
