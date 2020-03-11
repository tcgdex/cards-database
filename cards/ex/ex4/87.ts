import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-87",
	localId: 87,

	// Card informations
	name: {
		en: "Magma Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
