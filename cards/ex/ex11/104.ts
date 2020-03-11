import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-104",
	localId: 104,

	// Card informations
	name: {
		en: "Holon Energy FF",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",











	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
