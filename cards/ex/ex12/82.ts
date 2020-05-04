import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-82",
	localId: 82,

	// Card informations
	name: {
		en: "React Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",











	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
