import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-91",
	localId: 91,

	// Card informations
	name: {
		en: "EXP. ALL",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
