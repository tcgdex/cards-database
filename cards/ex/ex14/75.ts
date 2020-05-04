import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-75",
	localId: 75,

	// Card informations
	name: {
		en: "Crystal Beach",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Shizurow",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
