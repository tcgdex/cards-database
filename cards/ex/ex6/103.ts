import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-103",
	localId: 103,

	// Card informations
	name: {
		en: "Multi Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Tokumi Akabane",











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
