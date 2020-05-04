import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-124",
	localId: 124,

	// Card informations
	name: {
		en: "Time-Space Distortion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/124/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Shizurow",











	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
