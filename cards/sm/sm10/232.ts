import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-232",
	localId: 232,

	// Card informations
	name: {
		en: "Metal Core Barrier",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/232/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/232/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Studio Bora Inc.",











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
