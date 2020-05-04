import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-98",
	localId: 98,

	// Card informations
	name: {
		en: "δ Rainbow Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/98/high",
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
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
