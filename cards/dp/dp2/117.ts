import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-117",
	localId: 117,

	// Card informations
	name: {
		en: "Skull Fossil",
	},

	hp: 50,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/117/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
