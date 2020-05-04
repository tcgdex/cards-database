import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-89",
	localId: 89,

	// Card informations
	name: {
		en: "Island Cave",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ken Ikugi",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
