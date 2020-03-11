import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-86",
	localId: 86,

	// Card informations
	name: {
		en: "Darkness Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/86/high",
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
		name: "Emerald",
		code: "ex9"
	}
}

export default card
